
import Loadable from "react-loadable";
import Loading from "../../Loading";

const AsyncBulletList = Loadable({
  loader: () => import("./index" /* webpackChunkName: "bulletlist" */).then(m => m.BulletList),
  loading: Loading
});
const AsyncCalloutCenter = Loadable({
  loader: () => import("./index" /* webpackChunkName: "calloutcenter" */).then(m => m.CalloutCenter),
  loading: Loading
});
const AsyncContactForm = Loadable({
  loader: () => import("./index" /* webpackChunkName: "contactform" */).then(m => m.ContactForm),
  loading: Loading
});
const AsyncContentImage = Loadable({
  loader: () => import("./index" /* webpackChunkName: "contentimage" */).then(m => m.ContentImage),
  loading: Loading
});
const AsyncContentImageLeft = Loadable({
  loader: () => import("./index" /* webpackChunkName: "contentimageleft" */).then(m => m.ContentImageLeft),
  loading: Loading
});
const AsyncContentNoImage = Loadable({
  loader: () => import("./index" /* webpackChunkName: "contentnoimage" */).then(m => m.ContentNoImage),
  loading: Loading
});
const AsyncEventMap = Loadable({
  loader: () => import("./index" /* webpackChunkName: "eventmap" */).then(m => m.EventMap),
  loading: Loading
});
const AsyncListOfLinks = Loadable({
  loader: () => import("./index" /* webpackChunkName: "listoflinks" */).then(m => m.ListOfLinks),
  loading: Loading
});
const AsyncLogoGrid = Loadable({
  loader: () => import("./index" /* webpackChunkName: "logogrid" */).then(m => m.LogoGrid),
  loading: Loading
});
const AsyncPeopleContainer = Loadable({
  loader: () => import("./index" /* webpackChunkName: "peoplecontainer" */).then(m => m.PeopleContainer),
  loading: Loading
});
const AsyncPostList = Loadable({
  loader: () => import("./index" /* webpackChunkName: "postlist" */).then(m => m.PostList),
  loading: Loading
});
const AsyncPurchaserForm = Loadable({
  loader: () => import("./index" /* webpackChunkName: "purchaserform" */).then(m => m.PurchaserForm),
  loading: Loading
});
const AsyncRecentArticles = Loadable({
  loader: () => import("./index" /* webpackChunkName: "settings" */).then(m => m.RecentArticles),
  loading: Loading
});
const AsyncSearchContainer = Loadable({
  loader: () => import("./index" /* webpackChunkName: "searchcontainer" */).then(m => m.SearchContainer),
  loading: Loading
});
const AsyncSupplierForm = Loadable({
  loader: () => import("./index" /* webpackChunkName: "supplierform" */).then(m => m.SupplierForm),
  loading: Loading
});
const AsyncThreeColumnBlock = Loadable({
  loader: () => import("./index" /* webpackChunkName: "threecolumnblock" */).then(m => m.ThreeColumnBlock),
  loading: Loading
});
const AsyncThreeColumnGray = Loadable({
  loader: () => import("./index" /* webpackChunkName: "threecolumngray" */).then(m => m.ThreeColumnGray),
  loading: Loading
});
const AsyncTwoColumnsCentered = Loadable({
  loader: () => import("./index" /* webpackChunkName: "TwoColumnsCentered" */).then(m => m.TwoColumnsCentered),
  loading: Loading
});

export {
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
  AsyncTwoColumnsCentered
}
