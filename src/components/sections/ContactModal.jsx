import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import {
  AiOutlineUser,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillLinkedin,
  AiOutlineClose
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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    linkedinProfile: "",
    phone: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const { name, email, linkedinProfile, phone } = formData;

    if (!name || !email ) {
      toast.error("Please fill in all required fields!");
      return;
    }

    setSubmitting(true);
    toast.loading("Sending request…", { id: "submit" });

    try {
      await axios.post("https://ai.brannovate.com/api/contact-request", {
        name,
        email,
        phone,
        linkedin_url: linkedinProfile,
        selected_package: selectedPackage,
      });
      toast.success(`Request for ${selectedPackage} submitted!`, { id: "submit" });
      onClose();
      setFormData({ name: "", email: "", linkedinProfile: "", phone: "" });
    } catch (err) {
      console.error(err);
      toast.error(
        err.response?.data?.message || "Submission failed—please try again.",
        { id: "submit" }
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">

        <div className="contact-one__form-box">
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{ position: "absolute", top: 8, right: 8, color: "rgba(0,0,0,0.54)" }}
        >
          <AiOutlineClose size={24} />
        </IconButton>
          <h3 className="contact-one__form-title">
            Get started with<br />
            <span style={{ color: '#0000ff' }}>{selectedPackage}</span>
          </h3>

          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="form-group">
              <p className="contact-one__form-label">Name*</p>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
              />
              <div className="contact-one__form-icon">
                <AiOutlineUser size={20} />
              </div>
            </div>

            {/* Email */}
            <div className="form-group">
              <p className="contact-one__form-label">Email*</p>
              <input
                type="email"
                name="email"
                placeholder="info@brannovate.com"
                value={formData.email}
                onChange={handleChange}
              />
              <div className="contact-one__form-icon">
                <AiOutlineMail size={20} />
              </div>
            </div>

            {/* Phone */}
            <div className="form-group">
              <p className="contact-one__form-label">Phone*</p>
              <input
                type="text"
                name="phone"
                placeholder="(___) ___-____"
                value={formData.phone}
                onChange={handleChange}
              />
              <div className="contact-one__form-icon">
                <AiOutlinePhone size={20} />
              </div>
            </div>

            {/* LinkedIn */}
            <div className="form-group">
              <p className="contact-one__form-label">LinkedIn Profile URL</p>
              <input
                type="text"
                name="linkedinProfile"
                placeholder="www.linkedin.com/your-profile"
                value={formData.linkedinProfile}
                onChange={handleChange}
              />
              <div className="contact-one__form-icon">
              <i className="fab fa-linkedin"></i>
              </div>
            </div>

            {/* Selected Package */}
            <div className="form-group">
              <p className="contact-one__form-label">Selected Package</p>
              <input
                type="text"
                name="selected_package"
                value={selectedPackage}
                disabled
              />
              <div className="contact-one__form-icon">
                <i className="fas fa-tags"></i>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-group">
              <div className="button-box">
                <button
                  type="submit"
                  className="thm-btn contact-one__btn"
                  disabled={submitting}
                >
                  {submitting ? "Submitting…" : "Submit Request"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </Dialog>
    </>
  );
}
