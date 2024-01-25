import Hero from "./Hero"
import BlogSection from "./blogsection/BlogSection"
import CapCollection from "./cap-collection/CapCollection"
import CategoriSection from "./categorysection/CategoriSection"
import HoddiCollection from "./hoddi-collection/HoddiCollection"
import InstagramSection from "./instagramsection/InstagramSection"
import Opportunity from "./opportunity/Opportunity"
import ShirtCollection from "./shirt-collection/ShirtCollection"
import Shop2items from "./shop-2items/Shop2items"

const Home = () => {
    return (
        <div className=" container mx-auto">
            <Hero></Hero>
            <Opportunity></Opportunity>
            <ShirtCollection></ShirtCollection>
            <Shop2items></Shop2items>
            <HoddiCollection></HoddiCollection>
            <CategoriSection></CategoriSection>
            <CapCollection></CapCollection>
            <BlogSection></BlogSection>
            <InstagramSection></InstagramSection>
        </div>
    )
}

export default Home