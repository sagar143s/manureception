"use client";
import React, { useState } from "react";
import Image from "next/image";
import Profile from "../../../public/photo.png"; // Ensure this image exists in your /public folder
import Call from '../../../public/telephone.png'

const WeddingCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [isCallModalOpen, setIsCallModalOpen] = useState(false); // State to manage call modal visibility

  // Toggle Modals
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const openCallModal = () => setIsCallModalOpen(true);
  const closeCallModal = () => setIsCallModalOpen(false);

  const styles = {
    card: {
      width: "90%",
      maxWidth: "400px",
      margin: "20px auto",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      overflow: "hidden",
      fontFamily: "'Georgia', serif",
      backgroundColor: "#fdf8f5",
      border: "1px solid #e2dedb",
    },
    header: {
      backgroundColor: "#f8e9e3",
      padding: "10px",
      textAlign: "center",
    },
    headerText: {
      fontSize: "16px",
      color: "#6b3d2e",
      fontWeight: "bold",
      textTransform: "uppercase",
      letterSpacing: "1px",
    },
    imageContainer: {
      width: "100%",
      height: "250px",
      position: "relative", // Necessary for next/image
    },
    details: {
      padding: "15px",
      textAlign: "center",
      color: "#333",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
      color: "#6b3d2e",
    },
    names: {
      fontSize: "18px",
      marginBottom: "8px",
      color: "#8a4b3a",
    },
    reception: {
      marginTop: "15px",
      fontSize: "14px",
      color: "#6b3d2e",
    },
    wedding: {
      marginTop: "10px",
      fontSize: "14px",
      color: "#555",
      fontStyle: "italic",
    },
    note: {
      fontSize: "12px",
      color: "#8a4b3a",
      marginTop: "10px",
      fontStyle: "italic",
    },
    footer: {
      backgroundColor: "#f8e9e3",
      padding: "10px",
      fontSize: "12px",
      textAlign: "center",
      color: "#6b3d2e",
      borderTop: "1px solid #e2dedb",
    },
    modal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "white",
      borderRadius: "10px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      zIndex: 1000,
      width: "80%", // Percentage-based width for better responsiveness
      maxWidth: "600px", // Max width to prevent it from becoming too large on bigger screens
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
    iframeContainer: {
      position: "relative",
      width: "100%",
      height: "0",
      paddingBottom: "56.25%", // Aspect ratio 16:9 (common for maps)
      borderRadius: "8px",
      overflow: "hidden",
      marginBottom: "10px", // Optional: Add spacing below the iframe
    },
    iframe: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    },
    closeBtn: {
      marginTop: "10px",
      padding: "5px 15px",
      backgroundColor: "#6b3d2e",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    directionsBtn: {
      marginTop: "10px",
      padding: "5px 15px",
      backgroundColor: "#e76e47",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    callBtn: {
      marginTop: "10px",
      padding: "5px 15px",
      backgroundColor: "#4caf50",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "5px",
    },
    callModal: {
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#fff",
      borderRadius: "15px",
      boxShadow: "0 6px 12px rgba(0, 0, 0, 0.2)",
      padding: "20px",
      zIndex: 1000,
      width: "80%",
      maxWidth: "350px",
      border: "2px solid #e76e47", // Border to highlight the modal
    },
    callModalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 999,
    },
    callNumberBtn: {
      marginTop: "15px",
      padding: "10px 20px",
      backgroundColor: "#5BC236",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "25px",
      width: "100%",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    callNumberBtnHover: {
      backgroundColor: "#356F1F",
    },
    cancelBtn: {
      marginTop: "10px",
      padding: "10px 20px",
      backgroundColor: "#f44336",
      color: "white",
      border: "none",
      cursor: "pointer",
      borderRadius: "25px",
      width: "100%",
      fontSize: "16px",
      transition: "background-color 0.3s",
    },
    cancelBtnHover: {
      backgroundColor: "#d32f2f",
    },
  };

  // Function to open Google Maps directions in a new tab
  const openDirections = () => {
    const location = "Sree Padmam Auditorium, Guruvayoor, India"; // Location name or address
    const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(location)}`;
    window.open(googleMapsUrl, "_blank");
  };

  // Function to call a number
  const callNumber = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div style={styles.card}>
      {/* Header Section */}
      <div style={styles.header}>
        <p style={styles.headerText}>Together with their families</p>
      </div>

      {/* Image Section */}
      <div style={styles.imageContainer}>
        <Image
          src={Profile}
          alt="Wedding Couple"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Details Section */}
      <div style={styles.details}>
        <h1 style={styles.title}>You’re Invited!</h1>
        <p style={styles.names}>
          <strong>Dr.Manu & Dr.Sreelakshmi</strong>
        </p>
        <p style={styles.reception}>
          <strong>Reception:</strong> <br />
          Thursday, 3rd April 2025 <br />
          Time: 3:00PM to 9:00PM
        </p>
        <button onClick={openModal}>View Reception Location on Map</button>

        <p style={styles.wedding}>
          <strong>Wedding Ceremony (For Information Only):</strong> <br />
          Sunday, 30th March 2025 <br />
          Guruvayoor Temple <br />
          Auspicious Time: 6:00AM to 7:00AM
        </p>
        <p style={styles.note}>
          *We warmly invite you to join us for the reception. The wedding ceremony is just for your information.*
        </p>

        {/* Button to Open Call Modal */}
        <button onClick={openCallModal} style={styles.callBtn}>
          Call for Assistance
        </button>
      </div>

      {/* Footer Section */}
      <div style={styles.footer}>
        "We look forward to celebrating this special day with you!"
      </div>

      {/* Modal with Google Map */}
      {isModalOpen && (
        <>
          <div style={styles.overlay} onClick={closeModal}></div>
          <div style={styles.modal}>
            <h2>Wedding Location on Map</h2>
            <div style={styles.iframeContainer}>
              <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.719703692104!2d76.6822409!3d8.8123817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05e5f64b8363d9%3A0x863bd6565d69c99a!2sEshaanvi%20convention%20center!5e0!3m2!1sen!2sae!4v1736507601980!5m2!1sen!2sae"
  style={styles.iframe}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <button onClick={openDirections} style={styles.directionsBtn}>
              Get Directions
            </button>&nbsp;
            <button onClick={closeModal} style={styles.closeBtn}>
              Close Map
            </button>
          </div>
        </>
      )}

      {/* Call Modal with Contact Numbers */}
      {isCallModalOpen && (
        <>
          <div style={styles.callModalOverlay} onClick={closeCallModal}></div>
          <div style={styles.callModal}>
            <h2>Contact Numbers</h2>
            <button
              onClick={() => callNumber("+919961593230")}
              style={styles.callNumberBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
               {/* Mr.Madhu (Father) */}
               Call: +919961593230
               </button>
            <button
              onClick={() => callNumber("+919995194849")}
              style={styles.callNumberBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
            >
               {/* Mrs.Sheena (Mother) */}
               Call: +919995194849
            </button>
            
            <button
              onClick={closeCallModal}
              style={styles.cancelBtn}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
            >
                
              Cancel
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default WeddingCard;
