import React from "react";
import noteImg from "../images/contact/Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away. Let’s catch up over coffee. Great stories always begin with a good conversation.png";
import decorTR from "../images/contact/Footer Vector (2).png";
import decorBL from "../images/contact/Footer Vector (1).png";
import frame from "../images/contact/Frame 23.png";

export default function Contact(){
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [successMsg, setSuccessMsg] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const API_URL = "https://vernanbackend.ezlab.in/api/contact-us/";

  async function handleSubmit(e){
    e.preventDefault();
    setSuccessMsg("");
    setErrorMsg("");
    if(!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      setErrorMsg("Please enter a valid email.");
      return;
    }
    setLoading(true);
    try{
      const res = await fetch(API_URL,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message })
      });
      const data = await res.json().catch(() => ({}));
      if(!res.ok){
        const msg = data?.message || "Failed to submit. Please try again.";
        throw new Error(msg);
      }
      setSuccessMsg(data?.message || "Submitted successfully.");
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }catch(err){
      setErrorMsg(err.message || "Something went wrong.");
    }finally{
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen py-16 md:py-20 overflow-hidden">
      <img src={decorTR} alt="decor top right" className="pointer-events-none select-none hidden md:block absolute right-0 top-0 w-72 opacity-80 -z-10" />
      <img src={decorBL} alt="decor bottom left" className="pointer-events-none select-none hidden md:block absolute left-0 bottom-0 w-72 opacity-80 -z-10" />
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div className="relative">
            <img src={frame} alt="frame" className="hidden md:block absolute -left-6 top-8 w-12 opacity-60" />
            <img src={noteImg} alt="contact intro" className="relative w-full max-w-md object-contain" />
          </div>

          <div>
            <h1 className="text-center md:text-left text-3xl font-serif text-slate-700">Join the Story</h1>
            <p className="mt-2 text-center md:text-left text-slate-600">Ready to bring your vision to life? Let's talk.</p>
            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <input className="border rounded px-3 py-2 bg-white/80" placeholder="Your name" value={name} onChange={(e)=>setName(e.target.value)} />
              <input className="border rounded px-3 py-2 bg-white/80" placeholder="Your email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
              <input className="border rounded px-3 py-2 bg-white/80" placeholder="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)} />
              <textarea className="border rounded px-3 py-2 h-32 bg-white/80" placeholder="Your message" value={message} onChange={(e)=>setMessage(e.target.value)} />
              {errorMsg && (<div className="text-red-600 text-sm">{errorMsg}</div>)}
              {successMsg && (<div className="text-green-600 text-sm">{successMsg}</div>)}
              <button type="submit" disabled={loading} className={`justify-self-start px-5 py-2 rounded-full text-white ${loading ? "bg-orange-400 cursor-not-allowed" : "bg-orange-500 hover:bg-orange-600"}`}>
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}