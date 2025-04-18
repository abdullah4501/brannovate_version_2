import React from "react";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import { styled } from "@mui/material/styles";
import toast, { Toaster } from "react-hot-toast";
import {
  AiOutlineClose,
  AiOutlineUser,
  AiOutlineMail,
  AiFillLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";

/* ---------- styled wrapper ---------- */
const StyledDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: theme.spacing(2),
    padding: theme.spacing(2),
    overflow: "visible",
  },
}));

/* ---------- component ---------- */
export default function ContactModal({ isOpen, onClose, selectedPackage }) {
  const [loading, setLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    linkedinProfile: "",
    phoneNumber: "",
  });

  /* handle changes */
  const onChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  /* submit */
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, linkedinProfile, phoneNumber } = formData;

    /* basic front‑end guard */
    if (!name || !email || !phoneNumber) {
      toast.error("Name, email & phone are required.");
      return;
    }
    try {
      setLoading(true);

      await axios.post(
        `http://127.0.0.1:8000/api/contact-request`,
        { ...formData, selectedPackage },
        { headers: { "Content-Type": "application/json" } }
      );

      toast.success(`Request for ${selectedPackage} submitted!`);
      setFormData({ name: "", email: "", linkedinProfile: "", phoneNumber: "" });
      onClose();
    } catch (err) {
      toast.error(
        err.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <StyledDialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
        <div className="contact-one__form-box">
          <h3 className="contact-one__form-title">
            Send&nbsp;us&nbsp;a&nbsp;<span style={{ color: "#0000ff" }}>message</span>
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
                onChange={onChange}
                required
              />
            </div>

            {/* Email */}
            <div className="form-group">
              <p className="contact-one__form-label">Email*</p>
              <input
                type="email"
                name="email"
                placeholder="info@brannovate.com"
                value={formData.email}
                onChange={onChange}
                required
              />
            </div>

            {/* Phone */}
            <div className="form-group">
              <p className="contact-one__form-label">Phone*</p>
              <input
                type="text"
                name="phoneNumber"
                placeholder="(___) ___‑____"
                value={formData.phoneNumber}
                onChange={onChange}
                required
              />
            </div>

            {/* LinkedIn (optional) */}
            <div className="form-group">
              <p className="contact-one__form-label">LinkedIn Profile URL</p>
              <input
                type="url"
                name="linkedinProfile"
                placeholder="https://www.linkedin.com/in/johnsmith"
                value={formData.linkedinProfile}
                onChange={onChange}
              />
            </div>

            {/* Button */}
            <div className="form-group">
              <button
                type="submit"
                className="thm-btn contact-one__btn"
                disabled={loading}
              >
                {loading ? "Please wait…" : "Submit Request"}
              </button>
            </div>
          </form>
        </div>
      </StyledDialog>
    </>
  );
}
