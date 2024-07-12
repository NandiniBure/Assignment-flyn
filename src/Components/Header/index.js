import React, { useEffect, useState } from 'react'
import "./style.css"
import axios from "axios"
import { CrossIcon, Plus } from 'lucide-react';
const Header = () => {
    const [open,setOpen]=useState(false);

  const [isChecked, setIsChecked] = useState(false);

  const [form,setFrom]=useState({
    email:"",
    firstname:"",
    lastname:""
  })
  

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

     const [isFocused, setIsFocused] = useState(false);
      const [isFocusedLast, setIsFocusedLast] = useState(false);
         const [isFocusedFirst, setIsFocusedFirst] = useState(false);

     const handleFocus = () => {
       setIsFocused(true);
     };

     const handleBlur = (event) => {
       if (event.target.value === "") {
         setIsFocused(false);
       }
     };



        const handleFocusLast = () => {
          setIsFocusedLast(true);
        };

        const handleBlurLast = (event) => {
          if (event.target.value === "") {
            setIsFocusedLast(false);
          }
        };

        
        const handleFocusFirst = () => {
          setIsFocusedFirst(true);
        };

        const handleBlurFirst = (event) => {
          if (event.target.value === "") {
            setIsFocusedFirst(false);
          }
        };



        const handleForm=async()=>{
            await axios.post(
               "https://getform.io/f/azylygrb",
               {
                 email: form.email,
                 firstname:form.firstname,
                 lastname:form.lastname
               },
               { headers:   { Accept: "application/json" } }
             )
             .then((response) => console.log(response))
             .catch((error) => console.log(error));
        }


         const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

     useEffect(() => {
       if (open) {
         document.body.classList.add("no-scroll");
       } else {
         document.body.classList.remove("no-scroll");
       }

       // Cleanup function to remove the class when the component is unmounted
       return () => {
         document.body.classList.remove("no-scroll");
       };
     }, [open]);

  return (
    <div className="header-container">
      <div className={`left-side  ${open && "blur"}`}>
        <h2 className="heading1">AWARD WINING</h2>
        <h1 className="heading2">DIGITAL MARKETING AGENCY</h1>
        <p className="para">
          Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
          Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus
          nec risus finibus feugiat et fermentum
        </p>
        <button onClick={() => setOpen(true)} className="btn">
          CONTACT US
        </button>
      </div>
      <div className={`"right-side" ${open && "blur"}`}>
        <img alt="" className="img" src="/1.png"></img>
      </div>

      {open && (
        <div className="pop-up-container">
          <div className="popup-head">
            <h2 style={{}}>Talk to us</h2>
            <Plus onClick={() => setOpen(false)} className="cross"></Plus>
          </div>
          <form>
            <div className="input-container">
              <label className={isFocused ? "label-active" : ""}>
                Work email*
              </label>
              <input
                className="input"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            </div>
            <div className="name-input">
              <div className="input-container">
                <label className={isFocusedFirst ? "label-active" : ""}>
                  First Name
                </label>
                <input
                  className="input"
                  type="text"
                  name="firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  onFocus={handleFocusFirst}
                  onBlur={handleBlurFirst}
                />
              </div>
              <div className="input-container">
                <label className={isFocusedLast ? "label-active" : ""}>
                  Last Name
                </label>
                <input
                  className="input"
                  type="text"
                  name="lastname"
                  value={form.lastname}
                  onChange={handleChange}
                  onFocus={handleFocusLast}
                  onBlur={handleBlurLast}
                />
              </div>
            </div>

            <div className="checkbox-container">
              <span>
                <input
                  type="checkbox"
                  id="myCheckbox"
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                />
              </span>
              <div className="text-condition">
                I agree to Fyle's terms and condition,and provide consent to
                send me communication
              </div>
            </div>
            <button
              type="button"
              onClick={() => handleForm()}
              className="btn-contact"
            >
              Contact Us
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Header