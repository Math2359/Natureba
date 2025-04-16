

export const Footer = () => {
    return (
        <footer className="bg-[#3E7D4E] text-white flex justify-between items-center p-4">
            <div className="flex-1 text-center">
                <p>Column 1</p>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 flex justify-center space-x-4">
                <p>icon 1</p>
                <p>icon 2</p>
                <p>icon 3</p>
            </div>
            <div className="w-px bg-white h-16"></div>
            <div className="flex-1 text-center">
                <p>Column 3</p>
            </div>
        </footer>
    );
};
