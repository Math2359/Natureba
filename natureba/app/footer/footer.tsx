import instagram_logo from "/instagram_logo.svg";
import whatsapp_logo from "/whatsapp_logo.svg";
import twitter_logo from "/twitter_logo.svg";

export const Footer = () => {
    return (
        <footer className="bg-[#3E7D4E] text-white flex justify-between items-center p-4">
            <div className="flex-1 text-center">
                <p>Column 1</p>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 flex justify-center space-x-4">
                <a href="https://www.instagram.com" target="_blank">
                    <img src={instagram_logo} alt="Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank">
                    <img src={twitter_logo} alt="Twitter" />
                </a>
                <a href="https://web.whatsapp.com" target="_blank">
                    <img src={whatsapp_logo} alt="Whatsapp" />
                </a>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 text-center">
                <p>Column 3</p>
            </div>
        </footer>
    );
};
