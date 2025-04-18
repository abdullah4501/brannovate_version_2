import React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlinePhone,
} from 'react-icons/ai';

// Styled wrapper to tweak the modal card
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    overflow: 'visible',
  },
}));

export default function ContactModal({ isOpen, onClose, selectedPackage }) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    linkedinProfile: "",
    phoneNumber: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    const { name, email, linkedinProfile, phoneNumber } = formData;
    if (!name || !email || !linkedinProfile || !phoneNumber) {
      toast.error("Please fill in all fields!");
      return;
    }
    toast.success(`Request for ${selectedPackage} submitted!`);
    onClose();
    setFormData({ name: "", email: "", linkedinProfile: "", phoneNumber: "" });
  };

  return (
    <>
      <Toaster position="top-right" />
      <Dialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
      >

        <div className="contact-one__form-box">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "rgba(0,0,0,0.54)" }}
        >
          <AiOutlineClose size={24} />
        </IconButton>
          <h3 className="contact-one__form-title">Get started with<br /><span style={{color:'#0000ff'}}>{selectedPackage}</span></h3>
          <form id="contact-form">
            <div className="form-group">
              <p className="contact-one__form-label">Name*</p>
              <input 
                type="text" 
                name="name" 
                placeholder="John Smith"
                required 
              />
              <div className="contact-one__form-icon">
                <i className="fas fa-user"></i>
              </div>
            </div>
            <div className="form-group">
              <p className="contact-one__form-label">Email*</p>
              <input 
                type="email" 
                name="email" 
                placeholder="info@brannovate.com"
                required 
              />
              <div className="contact-one__form-icon">
                <i className="far fa-envelope"></i>
              </div>
            </div>
            <div className="form-group">
              <p className="contact-one__form-label">Phone*</p>
              <input 
                type="text" 
                name="phone" 
                placeholder="(___) ___-____"
                required 
              />
              <div className="contact-one__form-icon">
                <i className="far fa-envelope"></i>
              </div>
            </div>
            <div className="form-group">
              <p className="contact-one__form-label">Linkedin Profile URL</p>
              <input 
                type="text" 
                name="linkedinurl" 
                placeholder="www.linkedin.com"
              />
              <div className="contact-one__form-icon">
                <i className="fab fa-linkedin"></i>
              </div>
            </div>
            <div className="form-group">
              <p className="contact-one__form-label">Selected Package</p>
              <input 
                type="text" 
                name="selected_package" 
                value={selectedPackage}
                style={{color:'#000'}}
                disabled
              />
              <div className="contact-one__form-icon">
                <i className="fas fa-tags"></i>
              </div>
            </div>
            <div className="form-group">
              {/* Button Box */}
              <div className="button-box">
                <button 
                  type="submit" 
                  className="thm-btn contact-one__btn"
                  data-loading-text="Please wait..."
                >
                  Submit Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}
