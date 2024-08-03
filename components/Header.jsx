import Link from "next/link";
import { Button, button } from "./ui/button";


//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";


const Header = () => {
    return (
    <header className="px-8 xl:py-12 text-white">
        <div className="container mx-auto flex justify-between items-center">
        <Link href="*">
        <h1 className="text-4xl font-semibold">
            LOGO<span className="text-accent">.</span>
        </h1>
        </Link>

            {/* nav & hire mebutton */}
        <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
        <Button>Hire Me</Button>
        </Link>
        </div>

        {/* moblie nav */}

        <div className="xl:hidden">
            <MobileNav />
        </div>





        </div>
    </header>
 );
};

export default Header 