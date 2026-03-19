import InfiniteScroll from "infinite-scroll";
import {
    createIcons,
    Facebook,
    Globe2,
    Linkedin,
    Mail,
    Menu,
    Phone,
    X,
} from "lucide";

createIcons({
    icons: {
        Phone,
        Mail,
        Globe2,
        Facebook,
        Linkedin,
        Menu,
        X,
    },
});

window.InfiniteScroll = InfiniteScroll;
