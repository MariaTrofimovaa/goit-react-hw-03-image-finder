(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{10:function(e,a,t){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__qndzC",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2P7Kr"}},11:function(e,a,t){e.exports={Overlay:"Modal_Overlay__NwqNQ",Modal:"Modal_Modal__VKLIm"}},21:function(e,a,t){},24:function(e,a,t){e.exports={ImageGallery:"ImageGallery_ImageGallery__2fci1"}},25:function(e,a,t){e.exports={Button:"Button_Button__2Tt0G"}},4:function(e,a,t){e.exports={Searchbar:"Searchbar_Searchbar__2_-Cm",SearchForm:"Searchbar_SearchForm__2bXCt",SearchFormButton:"Searchbar_SearchFormButton__2Kt_p",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__1nWvf",SearchFormInput:"Searchbar_SearchFormInput__BIs6B"}},71:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t(22),o=t.n(r),c=t(12),s=t(5),l=t(6),i=t(8),u=t(7),d=t(4),h=t.n(d),m=t(0),p=function(e){var a=e.onHandleSubmit,t=e.onHandleChange,n=e.query;return Object(m.jsx)("header",{className:h.a.Searchbar,children:Object(m.jsxs)("form",{className:h.a.SearchForm,onSubmit:a,children:[Object(m.jsx)("button",{type:"submit",className:h.a.SearchFormButton,children:Object(m.jsx)("span",{className:h.a.SearchFormButtonLabel,children:"Search"})}),Object(m.jsx)("input",{className:h.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:n,onChange:t})]})})},g=t(23),b=t.n(g),y=t(2),j=t.n(y),f=t(24),O=t.n(f),v=t(10),S=t.n(v),_=function(e){var a=e.pictures,t=e.onOpenModal;return a.map((function(e){var a=e.id,n=e.webformatURL,r=e.largeImageURL,o=e.tags;return Object(m.jsx)("li",{className:S.a.ImageGalleryItem,children:Object(m.jsx)("img",{src:n,alt:o,"data-img":r,onClick:t,className:S.a.ImageGalleryItemImage})},a)}))};_.prototypes={pictures:j.a.arrayOf(j.a.shape({id:j.a.number.isRequired,webformatURL:j.a.string.isRequired,largeImageURL:j.a.number.isRequired,tags:j.a.number.isRequired})).isRequired,onOpenModal:j.a.func.isRequired};var I=_,x=function(e){var a=e.pictures,t=e.onOpenModal;return Object(m.jsx)("ul",{className:O.a.ImageGallery,children:Object(m.jsx)(I,{pictures:a,onOpenModal:t})})};x.prototypes={pictures:j.a.array.isRequired,onOpenModal:j.a.func.isRequired};var C=x,M=t(25),k=t.n(M),w=function(e){var a=e.onClick;return Object(m.jsx)("button",{type:"button",className:k.a.Button,onClick:a,children:"LOAD MORE"})},q=t(11),R=t.n(q),B=function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).handleEscape=function(a){"Escape"===a.code&&e.props.onClose()},e.onHandleClick=function(){return e.props.onClose()},e.handleBackdropClick=function(a){a.target===a.currentTarget&&e.props.onClose()},e}return Object(l.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="hidden"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleEscape),document.querySelector("body").style.overflow="auto"}},{key:"render",value:function(){return Object(m.jsx)("div",{className:R.a.Overlay,onClick:this.handleBackdropClick,children:Object(m.jsx)("div",{className:R.a.Modal,children:this.props.children})})}}]),t}(n.Component),L=t(26),N=t.n(L),F=function(e){var a=e.searchQuery,t=e.page;return N.a.get("".concat("https://pixabay.com/api","/?q=").concat(a,"&page=").concat(t,"&key=").concat("21692069-20428e2069b68a036394e4dd0","&image_type=photo&orientation=horizontal&per_page=12"))},G=(t(21),function(e){Object(i.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={pictures:[],searchQuery:"",page:1,loading:!1,showModal:!1,largeImageURL:"",tags:""},e.onChangeQuery=function(a){e.setState({searchQuery:a})},e.onHandleChange=function(a){var t=a.target.value;e.setState({query:t})},e.clearSubmit=function(){e.setState({pictures:[],page:1})},e.onHandleSubmit=function(a){a.preventDefault(),e.onChangeQuery(e.state.query),e.setState({pictures:[],page:1,loading:!0}),e.clearSubmit()},e.getPictures=function(){var a=e.state,t=a.searchQuery,n=a.page;F({searchQuery:t,page:n}).then((function(a){e.setState((function(e){return{pictures:[].concat(Object(c.a)(e.pictures),Object(c.a)(a.data.hits)),page:e.page+1}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})).finally((function(){return e.setState({loading:!1})}))},e.onToggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.onOpenModal=function(a){e.setState({largeImageURL:a.target.dataset.img,tags:a.target.alt}),e.onToggleModal()},e}return Object(l.a)(t,[{key:"componentDidUpdate",value:function(e,a){a.searchQuery!==this.state.searchQuery&&this.getPictures()}},{key:"render",value:function(){var e=this.state,a=e.pictures,t=e.loading,n=e.showModal,r=e.largeImageURL,o=e.tags;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(p,{onHandleChange:this.onHandleChange,onHandleSubmit:this.onHandleSubmit}),Object(m.jsxs)("div",{className:"Loader",children:[" ",t&&Object(m.jsx)(b.a,{})]}),Object(m.jsx)(C,{pictures:a,onOpenModal:this.onOpenModal}),!!a.length&&!t&&Object(m.jsx)(w,{onClick:this.getPictures}),n&&Object(m.jsx)(B,{onClick:this.onOpenModal,onClose:this.onToggleModal,children:Object(m.jsx)("img",{src:r,alt:o})})]})}}]),t}(n.Component));t(70);o.a.render(Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(G,{})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.a1d808ee.chunk.js.map