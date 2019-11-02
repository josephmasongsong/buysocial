import Loadable from "react-loadable";

const AsyncBulletList = Loadable({
  loader: () => import("./index").then(m => m.BulletList),
  loading: () => null
});
const AsyncContactForm = Loadable({
  loader: () => import("./index").then(m => m.ContactForm),
  loading: () => null
});
const AsyncListOfLinks = Loadable({
  loader: () => import("./index").then(m => m.ListOfLinks),
  loading: () => null
});
const AsyncLogoGrid = Loadable({
  loader: () => import("./index").then(m => m.LogoGrid),
  loading: () => null
});
const AsyncPeopleContainer = Loadable({
  loader: () => import("./index").then(m => m.PeopleContainer),
  loading: () => null
});
const AsyncPostList = Loadable({
  loader: () => import("./index").then(m => m.PostList),
  loading: () => null
});
const AsyncPurchaserForm = Loadable({
  loader: () => import("./index").then(m => m.PurchaserForm),
  loading: () => null
});
const AsyncRecentArticles = Loadable({
  loader: () => import("./index").then(m => m.RecentArticles),
  loading: () => null
});
const AsyncSearchContainer = Loadable({
  loader: () => import("./index").then(m => m.SearchContainer),
  loading: () => null
});
const AsyncSupplierForm = Loadable({
  loader: () => import("./index").then(m => m.SupplierForm),
  loading: () => null
});
const AsyncHome = Loadable({
  loader: () => import("../index").then(m => m.Home),
  loading: () => null
});
const AsyncPage = Loadable({
  loader: () => import("../index").then(m => m.Page),
  loading: () => null
});
const AsyncPost = Loadable({
  loader: () => import("../index").then(m => m.Post),
  loading: () => null
});
const AsyncPreview = Loadable({
  loader: () => import("../index").then(m => m.Preview),
  loading: () => null
});
const AsyncNotFound = Loadable({
  loader: () => import("../index").then(m => m.NotFound),
  loading: () => null
});
const AsyncBlogHeader = Loadable({
  loader: () => import("../index").then(m => m.BlogHeader),
  loading: () => null
});
const AsyncSlimHeader = Loadable({
  loader: () => import("../index").then(m => m.SlimHeader),
  loading: () => null
});

const AsyncColumns = Loadable({
  loader: () => import("./index").then(m => m.Columns),
  loading: () => null
});
const AsyncImageBlock = Loadable({
  loader: () => import("./index").then(m => m.ImageBlock),
  loading: () => null
});
const AsyncTestimonials = Loadable({
  loader: () => import("./index").then(m => m.Testimonials),
  loading: () => null
});
const AsyncVideoEmbed = Loadable({
  loader: () => import("./index").then(m => m.VideoEmbed),
  loading: () => null
});
const AsyncDirectory = Loadable({
  loader: () => import("./index").then(m => m.Directory),
  loading: () => null
});
const AsyncFreeform = Loadable({
  loader: () => import("./index").then(m => m.Freeform),
  loading: () => null
});
const AsyncSlickSlider = Loadable({
  loader: () => import("./index").then(m => m.SlickSlider),
  loading: () => null
});
const AsyncGiftDirectory = Loadable({
  loader: () => import("./index").then(m => m.GiftDirectory),
  loading: () => null
});

export {
  AsyncColumns,
  AsyncImageBlock,
  AsyncTestimonials,
  AsyncVideoEmbed,
  AsyncDirectory,
  AsyncFreeform,
  AsyncSlickSlider,
  AsyncGiftDirectory,
  AsyncBulletList,
  AsyncContactForm,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncPurchaserForm,
  AsyncRecentArticles,
  AsyncSearchContainer,
  AsyncSupplierForm,
  AsyncHome,
  AsyncPage,
  AsyncPost,
  AsyncPreview,
  AsyncNotFound,
  AsyncBlogHeader,
  AsyncSlimHeader,
}
