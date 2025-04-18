import React from "react";
import Dialog from "@mui/material/Dialog";
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
      <StyledDialog
        open={isOpen}
        onClose={onClose}
        fullWidth
        maxWidth="sm"
        style={{backgroundColor:'transparent'}}
      >
        <div className="contact-one__form-box">
          <h3 className="contact-one__form-title">Send us a <span style={{color:'#0000ff'}}>message</span></h3>
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
                <i className="far fa-envelope"></i>
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
      </StyledDialog>
    </>
  );
}
