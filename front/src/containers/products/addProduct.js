import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { getAllProducts } from "../../actions/products/productAction";
import axios from "axios";
import { config } from "../../config";
import { Image, Transformation, CloudinaryContext } from "cloudinary-react";

const AddProduct = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [products, setProducts] = useState([]);

  const dispatch = useDispatch();

  useEffect((dispatch) => {
    setProducts(dispatch(getAllProducts()));
  });

  const token = window.localStorage.getItem("user");

  const checkUploadResult = (resultEvent) => {
    if (resultEvent.event === "success") {
      let data = {
        picture: resultEvent.info.secure_url,
        id: props.user.user.id,
      };
      axios
        .post(config.api_url + "/product/picture", data, {
          headers: { "x-access-token": token },
        })
        .then((response) => {
          console.log(response);
          setPicture(resultEvent.info.secure_url);
          return response;
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //fonction d'affichage de notre interface de chargement d'images/videos de cloudinary
  const showWidget = () => {
    //paramètrage de l'interface
    let widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "du7ab0zzw", //nom de mon cloud
        uploadPreset: "E-pottery", //dossier ou l'on veut envoyer
        maxImageWidth: 800, //on peut paramètrer la taille max de l'image
        cropping: false, //recadrage
      },
      (error, result) => {
        // console.log("LOG DE LERROR", error);
        // console.log("LOG DU RESULT", result);
        checkUploadResult(result); //appel de notre callback
      }
    );
    //ouverture de notre interface
    widget.open();
  };

  const onSubmitForm = () => {
    let data = {
      name: name,
      description: description,
      picture: picture,
      price: price,
      category: category,
      user_id: props.user.user.id,
      creator_name: props.user.user.lastName,
    };

    axios
      .post(config.api_url + "/product/add", data, {
        headers: { "x-access-token": token },
      })
      .then((response) => {
        console.log(response);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      {redirect && <Redirect to="/products" />}
      <div className="form-main-container">
        <div className="basic-form">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmitForm();
            }}
          >
            <h2>Add Product</h2>
            <div className="small-inputs">
              <input
                className="small-input"
                placeholder="Name"
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.currentTarget.value);
                }}
              />
              <input
                className="small-input"
                placeholder="Category"
                type="text"
                name="category"
                onChange={(e) => {
                  setCategory(e.currentTarget.value);
                }}
              />
            </div>
            <textarea
              className="text-input"
              placeholder="Describe your product."
              type="text"
              name="description"
              onChange={(e) => {
                setDescription(e.currentTarget.value);
              }}
            />
            <div className="small-inputs">
              <input
                className="small-input"
                placeholder="Price"
                type="text"
                name="price"
                onChange={(e) => {
                  setPrice(e.currentTarget.value);
                }}
              />
              <button
                className="upload-pic"
                onClick={(e) => {
                  e.preventDefault();
                  showWidget();
                }}
              >
                Upload Picture
              </button>
            </div>
            <input className="form-button" type="submit" value="Register" />
          </form>
          <CloudinaryContext cloudName="du7ab0zzw">
            <div className="cloud-pic">
              <Image publicId={props.products.products.picture} id="picture">
                <Transformation quality="auto" fetchFormat="auto" />
              </Image>
            </div>
          </CloudinaryContext>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getAllProducts,
};

const mapStateToProps = (store) => {
  return {
    user: store.user,
    products: store.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
