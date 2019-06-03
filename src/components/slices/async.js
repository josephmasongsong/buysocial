
import Loadable from "react-loadable";

const AsyncBiography = Loadable({
  loader: () => import("./index").then(m => m.Biography),
  loading: () => null
});
const AsyncBulletList = Loadable({
  loader: () => import("./index").then(m => m.BulletList),
  loading: () => null
});
const AsyncCalloutCenter = Loadable({
  loader: () => import("./index").then(m => m.CalloutCenter),
  loading: () => null
});
const AsyncContactForm = Loadable({
  loader: () => import("./index").then(m => m.ContactForm),
  loading: () => null
});
const AsyncContentImage = Loadable({
  loader: () => import("./index").then(m => m.ContentImage),
  loading: () => null
});
const AsyncContentImageLeft = Loadable({
  loader: () => import("./index").then(m => m.ContentImageLeft),
  loading: () => null
});
const AsyncContentNoImage = Loadable({
  loader: () => import("./index").then(m => m.ContentNoImage),
  loading: () => null
});
const AsyncEventMap = Loadable({
  loader: () => import("./index").then(m => m.EventMap),
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
const AsyncThreeColumnBlock = Loadable({
  loader: () => import("./index").then(m => m.ThreeColumnBlock),
  loading: () => null
});
const AsyncThreeColumnGray = Loadable({
  loader: () => import("./index").then(m => m.ThreeColumnGray),
  loading: () => null
});
const AsyncTwoColumnsCentered = Loadable({
  loader: () => import("./index").then(m => m.TwoColumnsCentered),
  loading: () => null
});

const AsyncEmbed = Loadable({
  loader: () => import("./index").then(m => m.Embed),
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

const AsyncHeader = Loadable({
  loader: () => import("../index").then(m => m.Header),
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

const AsyncSearchDirectory = Loadable({
  loader: () => import("./index").then(m => m.SearchDirectory),
  loading: () => null
});

export {
  AsyncBiography,
  AsyncBulletList,
  AsyncCalloutCenter,
  AsyncContactForm,
  AsyncContentImage,
  AsyncContentImageLeft,
  AsyncContentNoImage,
  AsyncEventMap,
  AsyncListOfLinks,
  AsyncLogoGrid,
  AsyncPeopleContainer,
  AsyncPostList,
  AsyncPurchaserForm,
  AsyncRecentArticles,
  AsyncSearchContainer,
  AsyncSupplierForm,
  AsyncThreeColumnBlock,
  AsyncThreeColumnGray,
  AsyncTwoColumnsCentered,
  AsyncEmbed,
  AsyncHome,
  AsyncPage,
  AsyncPost,
  AsyncPreview,
  AsyncNotFound,
  AsyncHeader,
  AsyncBlogHeader,
  AsyncSlimHeader,
  AsyncSearchDirectory
}
