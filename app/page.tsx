import { Hero } from '@/lib/components/home/hero/hero';
import { About } from '@/lib/components/home/about/about';

const HomePage = () => (
    <div className="scroll-smooth">
        <Hero />
        <About />
    </div>
);

export default HomePage;
