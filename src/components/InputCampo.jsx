import React, { useState, useEffect } from "react";
import '../index.css'; 

export default function InputCampo() {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    useEffect(() => {
       
        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/validator@13.7.0/validator.min.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const validateEmail = () => {
        if (window.validator && !window.validator.isEmail(value)) {
            setError('Por favor, introduce un correo electrónico válido.');
        } else {
            setError('');
        }
    };

    const handleBlur = () => {
        validateEmail();
    };

    return (
        <div className="input-group">
            <input 
                type="text" 
                name="text" 
                className={`input ${error ? 'input-error' : ''}`}
                value={value}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Type an email..."
                required
            />
            <label className="user-label">Email</label>
            {error && <span className="error-message">{error}</span>}
        </div>
    );
}
