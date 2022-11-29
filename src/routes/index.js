import HeaderOnly from "~/components/Layout/HeaderOnly"
import Home from "~/pages/Home"
import Library from "~/pages/Library"
import MusicVideo from "~/pages/MusicVideo"


const publicRoutes = [
    { component: Home, path: '/' },
    { component: Library, path: '/library', layout: HeaderOnly },
    { component: MusicVideo, path: '/musicvideo', layout: null },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }