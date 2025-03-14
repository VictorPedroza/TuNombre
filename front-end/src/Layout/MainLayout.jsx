import { Footer, Navbar } from '../Components';
import { AppRoutes } from '../Routes/AppRoutes';

import './Layout.css';

const MainLayout = () => {
    return(
        <>
            <header>
                <Navbar />
            </header>
            <main>
                <AppRoutes />
            </main>
            <footer>
                <Footer />
            </footer>   
        </>
    )
}

export default MainLayout;