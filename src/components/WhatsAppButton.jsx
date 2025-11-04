import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    const phoneNumber = "918407961260"; // change to your WhatsApp number (with country code, no + or spaces)
    const message = "Hello! I would like to know more about your electrical services.";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/30 transition-transform hover:scale-110"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="w-6 h-6" />
        </a>
    );
}
