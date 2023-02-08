import React from "react";
import { useState } from "react";
import Header from "../components/Header";

const Settings = () => {

    const [Name, setName] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const [userEmail, setUserEmail] = useState("");

    const handleChangUseremail = (e) => {
        setUserEmail(e.target.value);
    }

    const [bio, setBio] = useState("");

    const handleChangeBio = (e) => {
        setBio(e.target.value);
    }

    const [url, setUrl] = useState("");

    const handleUrl = (e) => {
        setUrl(e.target.value);
    }

    const [socialAccounts, setSocialaccounts] = useState("");

    const handleSocialaccounts = (e) => {
        setSocialaccounts(e.target.value);
    }

    const [company, setCompany] = useState("");

    const handlechangeCompany = (e) => {
        setCompany(e.target.value);
    }

    const [location, setLocation] = useState("");

    const handlesetLocation = (e) => {
        setLocation(e.target.value);
    }

    const [image, setImage] = useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = useState("");

    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            setImage(file);
            setImagePreviewUrl(reader.result);
        };

        reader.readAsDataURL(file);
    };

    let imagePreview = null;
    if (imagePreviewUrl) {
        imagePreview = (
            <div
                style={{
                    backgroundImage: `url(${imagePreviewUrl})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                }}
            />
        );
    } else {
        imagePreview = (
            <div
                style={{
                    backgroundImage: 'url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fboy-standing&psig=AOvVaw1uGs-_k8ZWbsXGyHJCXqUp&ust=1675958955488000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCPC9yuOnhv0CFQAAAAAdAAAAABAG)',
                    width: 200,
                    height: 200,
                    borderRadius: "50%",
                    backgroundColor: 'white',
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <p>Please select an image</p>
            </div>
        );
    }

    return (
        <div>
            <div style={{backgroundColor: "rgba(255, 255, 255, 0.90)",}} className="flex h-screen items-center">
                <div className="ml-28 mr-28 text-[#a454fc]">
                    <div className="absolute">
                        <h2 className=" text-4xl text-black-500 mx-auto mb-5 font-serif">Public Profile</h2>
                        <div className="font-mono">
                            <form className=" ml-28">
                                <div className="flex flex-column max-w-full">
                                    <div>
                                        <div className="w-80 mb-6">
                                            <label>Name</label>
                                            <br />
                                            <input 
                                                type="text" 
                                                className="rounded-md p-1 shadow-md w-80 h-8 mx-auto" 
                                                placeholder="Talha Munir" 
                                                onChange={setName} />
                                            <br />
                                            <label className="text-sm">Your name may appear around SOMA where you contribute or are mentioned.</label>
                                        </div >

                                        <div className="w-80 mb-6">
                                            <label>Email</label>
                                            <br />
                                            <input 
                                                type="email" 
                                                placeholder="abcd@gmail.com" 
                                                className="rounded-md p-1 shadow-md h-8 mx-auto w-80" 
                                                onChange={setUserEmail} />
                                            <br />
                                            <label className="text-sm">Provide your Email here</label>
                                        </div>

                                        <div className="w-80 mb-6" >
                                            <label>Bio</label>
                                            <br />
                                            <textarea type="text" placeholder="Tell us a little bit about yourself" className="rounded-md p-1 shadow-md mx-auto w-80 h-32" onChange={setBio}></textarea>
                                        </div>
                                    </div>

                                    <div className=" mx-auto ml-96">
                                        <div> {imagePreview}</div>
                                        <br />
                                        <input 
                                            type="file"
                                            id="files" 
                                            className="text-transparent" 
                                            class="hidden" 
                                            onChange={handleImageChange} />
                                        <label for="files" className="ml-2 bg-slate-50 rounded-md font-bold">Edit Profile Picture</label>

                                    </div>

                                </div>

                                <div className="w-80 mb-6">
                                    <label>URL</label>
                                    <br />
                                    <input 
                                        type="url" 
                                        placeholder="URL of your linkedin profile" 
                                        className="rounded-md p-1 shadow-md w-80 h-8 mx-auto" 
                                        onChange={setUrl} />
                                    <label></label>
                                </div>

                                <div className="w-80 mb-6">
                                    <label>Company</label>
                                    <br />
                                    <input 
                                        type="text" 
                                        placeholder="e.g Bitnine Global" 
                                        className="rounded-md p-1 shadow-md w-80 h-8 mx-auto" 
                                        onChange={setCompany} />
                                    <label className="text-sm">You can mention your company name or your school name here</label>
                                </div>

                                <div className="w-80 mb-6">
                                    <label>Location</label>
                                    <br />
                                    <input 
                                        type="text" 
                                        placeholder="Provide your country name here" 
                                        className="rounded-md p-1 shadow-md w-80 h-8 mx-auto" 
                                        onChange={setLocation} />
                                </div>

                                <button 
                                    className="bg-[#a454fc] font-mono text-xl text-white rounded-lg mt-1 ml-96 w-44 h-10" 
                                    type="submit">
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Settings;