import Img1 from "../../../public/pngegg (1).png"
import Image from "next/image"

export default function Loading() {
    return (
        <>
            <style>
                {`
                html, body {
                    overflow: hidden !important;
                    height: 100%;
                }
                `}
            </style>
            <div style={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "linear-gradient(120deg, #e0e7ff 0%, #f0fdfa 100%)",
                position: "relative",
                overflow: "hidden"
            }}>
                {/* Effetto luce animata */}
                <div style={{
                    position: "absolute",
                    top: "-20%",
                    left: "-20%",
                    width: "140%",
                    height: "140%",
                    background: "radial-gradient(circle at 60% 40%, #a5b4fc55 0%, transparent 70%)",
                    zIndex: 0,
                    animation: "pulse 3s ease-in-out infinite"
                }} />
                {/* Bordo decorativo animato */}
                <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: 220,
                    height: 220,
                    transform: "translate(-50%, -50%)",
                    borderRadius: "50%",
                    border: "8px solid #6366f1",
                    opacity: 0.18,
                    zIndex: 1,
                    animation: "borderPulse 2.5s infinite alternate"
                }} />
                {/* Decorazione sinistra */}
                <div style={{
                    position: "absolute",
                    left: 0,
                    top: "30%",
                    width: 80,
                    height: 180,
                    background: "linear-gradient(135deg, #6366f1 0%, #a5b4fc 100%)",
                    opacity: 0.18,
                    borderTopRightRadius: 80,
                    borderBottomRightRadius: 80,
                    zIndex: 1,
                    filter: "blur(2px)",
                    animation: "slideLeft 3s infinite alternate"
                }} />
                {/* Decorazione destra */}
                <div style={{
                    position: "absolute",
                    right: 0,
                    bottom: "25%",
                    width: 80,
                    height: 180,
                    background: "linear-gradient(225deg, #6366f1 0%, #a5b4fc 100%)",
                    opacity: 0.18,
                    borderTopLeftRadius: 80,
                    borderBottomLeftRadius: 80,
                    zIndex: 1,
                    filter: "blur(2px)",
                    animation: "slideRight 3s infinite alternate"
                }} />
                <div style={{
                    animation: "spin 2s linear infinite",
                    borderRadius: "50%",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                    marginBottom: 32,
                    width: 120,
                    height: 120,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#fff",
                    border: "6px solid #a5b4fc",
                    zIndex: 2
                }}>
                    <Image src={Img1} alt="Loading" width={80} height={80} style={{objectFit: "contain"}} />
                </div>
                <h2 style={{
                    fontFamily: "sans-serif",
                    color: "#1e293b",
                    fontWeight: 700,
                    letterSpacing: 1,
                    marginBottom: 8,
                    fontSize: 28,
                    zIndex: 2
                }}>
                    Attendi un attimo...
                </h2>
                <p style={{
                    color: "#64748b",
                    fontFamily: "sans-serif",
                    fontSize: 18,
                    marginBottom: 24,
                    zIndex: 2
                }}>
                    Stiamo preparando la tua esperienza personalizzata.<br />
                    <span style={{color: "#6366f1", fontWeight: 600}}>Non chiudere la pagina!</span>
                </p>
                <div style={{
                    display: "flex",
                    gap: 8,
                    marginTop: 16,
                    zIndex: 2
                }}>
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                </div>
                <style>
                    {`
                    @keyframes spin {
                        0% { transform: rotate(0deg);}
                        100% { transform: rotate(360deg);}
                    }
                    @keyframes pulse {
                        0%, 100% { opacity: 0.7; }
                        50% { opacity: 1; }
                    }
                    @keyframes borderPulse {
                        0% { box-shadow: 0 0 0 0 #6366f1; }
                        100% { box-shadow: 0 0 40px 20px #6366f1; }
                    }
                    @keyframes slideLeft {
                        0% { transform: translateY(0);}
                        100% { transform: translateY(-20px);}
                    }
                    @keyframes slideRight {
                        0% { transform: translateY(0);}
                        100% { transform: translateY(20px);}
                    }
                    .dot {
                        display: inline-block;
                        width: 14px;
                        height: 14px;
                        border-radius: 50%;
                        background: #6366f1;
                        animation: bounce 1.2s infinite both;
                        margin: 0 2px;
                    }
                    .dot:nth-child(2) {
                        animation-delay: 0.2s;
                    }
                    .dot:nth-child(3) {
                        animation-delay: 0.4s;
                    }
                    @keyframes bounce {
                        0%, 80%, 100% { transform: scale(0.8);}
                        40% { transform: scale(1.2);}
                    }
                    `}
                </style>
            </div>
        </>
    )
}
