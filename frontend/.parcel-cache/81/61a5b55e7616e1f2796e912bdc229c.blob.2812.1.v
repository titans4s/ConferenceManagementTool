var helpers = require("../node_modules/@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
helpers.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _axios = require("axios");
var _axiosDefault = parcelHelpers.interopDefault(_axios);
class Researcher extends _react.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            authorname: '',
            papertitle: '',
            email: '',
            Designation: '',
            noofauthors: 0,
            researchfield: '',
            referedby: '',
            noofpages: 0,
            url: '',
            abstract: '',
            status: "",
            paid: "not paid"
        };
    }
    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    onSubmit(e) {
        e.preventDefault();
        let subject = {
            authorname: this.state.authorname,
            papertitle: this.state.papertitle,
            email: this.state.email,
            Designation: this.state.Designation,
            noofauthors: this.state.noofauthors,
            researchfield: this.state.researchfield,
            referedby: this.state.referedby,
            noofpages: this.state.noofpages,
            url: this.state.url,
            abstract: this.state.abstract,
            status: "null",
            payment: this.state.paid
        };
        console.log('Data to send', subject);
        _axiosDefault.default.post('http://localhost:9099/research/create', subject).then((response)=>{
            alert('Data successfully inserted');
        }).catch((error)=>{
            console.log(error.message);
            alert(error.message);
        });
    }
    render() {
        return(/*#__PURE__*/ _reactDefault.default.createElement("div", {
            className: "container",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 64
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-6 offset-md-3",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 65
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "card card-outline-secondary bg-light mb-3 border-dark mb-3",
            color: "blue",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 67
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "card-body",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 68
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("h3", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 73
            },
            __self: this
        }, "Use the form below to submit your paper for publication."), /*#__PURE__*/ _reactDefault.default.createElement("hr", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 73
            },
            __self: this
        }), /*#__PURE__*/ _reactDefault.default.createElement("form", {
            onSubmit: this.onSubmit,
            class: "row g-3 ",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 75
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-6 ",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 76
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputEmail4",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 77
            },
            __self: this
        }, "AuthorName"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "text",
            class: "form-control",
            id: "author",
            name: "authorname",
            value: this.state.authorname,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 78
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-6",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 80
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputEmail4",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 81
            },
            __self: this
        }, "Email"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "email",
            class: "form-control",
            id: "inputEmail4",
            name: "email",
            value: this.state.email,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 82
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-12",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 84
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputAddress",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 85
            },
            __self: this
        }, "Paper Title"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "text",
            class: "form-control",
            id: "inputAddress",
            name: "papertitle",
            value: this.state.papertitle,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 86
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-4",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 88
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputState",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 89
            },
            __self: this
        }, "Research Field"), /*#__PURE__*/ _reactDefault.default.createElement("select", {
            id: "inputState",
            class: "form-select",
            name: "researchfield",
            value: this.state.researchfield,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 90
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("option", {
            selected: true,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 91
            },
            __self: this
        }, "Choose..."), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 92
            },
            __self: this
        }, "IT"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 93
            },
            __self: this
        }, "Agriculture"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 94
            },
            __self: this
        }, "BioTechnology"))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-4",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 98
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputEmail4",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 99
            },
            __self: this
        }, "No of pages"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "Number",
            class: "form-control",
            id: "inputEmail4",
            name: "noofpages",
            value: this.state.noofpages,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 100
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-4",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 103
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputState",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 104
            },
            __self: this
        }, "Designation"), /*#__PURE__*/ _reactDefault.default.createElement("select", {
            id: "inputState",
            class: "form-select",
            name: "Designation",
            value: this.state.Designation,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 105
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("option", {
            selected: true,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 106
            },
            __self: this
        }, "Choose..."), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 107
            },
            __self: this
        }, "Student(Any degree)"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 108
            },
            __self: this
        }, "Research Scholar"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 109
            },
            __self: this
        }, "Assistant Professer"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 110
            },
            __self: this
        }, " Professer"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 111
            },
            __self: this
        }, " Doctrate Degree holder"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 112
            },
            __self: this
        }, " Other"))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-4",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 117
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputState",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 118
            },
            __self: this
        }, "Refered By"), /*#__PURE__*/ _reactDefault.default.createElement("select", {
            id: "inputState",
            class: "form-select",
            name: "referedby",
            value: this.state.referedby,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 119
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("option", {
            selected: true,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 120
            },
            __self: this
        }, "Choose..."), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 121
            },
            __self: this
        }, "Search Engines"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 122
            },
            __self: this
        }, "From facebook"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 123
            },
            __self: this
        }, "Friend or Guide"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 124
            },
            __self: this
        }, "Already an Author"), /*#__PURE__*/ _reactDefault.default.createElement("option", {
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 125
            },
            __self: this
        }, "Other"))), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-md-4",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 129
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputEmail4",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 130
            },
            __self: this
        }, "No of Authors"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "Number",
            class: "form-control",
            id: "inputEmail4",
            name: "noofauthors",
            value: this.state.noofauthors,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 131
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "form-floating",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 134
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("textarea", {
            class: "form-control",
            placeholder: "Leave a comment here",
            id: "floatingTextarea",
            name: "abstract",
            value: this.state.abstract,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 135
            },
            __self: this
        }), /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "floatingTextarea",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 136
            },
            __self: this
        }, "Paper abstract")), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-12",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 138
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("label", {
            for: "inputAddress",
            class: "form-label",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 139
            },
            __self: this
        }, "URL"), /*#__PURE__*/ _reactDefault.default.createElement("input", {
            type: "text",
            class: "form-control",
            id: "inputAddress",
            name: "url",
            value: this.state.url,
            onChange: this.onChange,
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 140
            },
            __self: this
        })), /*#__PURE__*/ _reactDefault.default.createElement("div", {
            class: "col-12",
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 145
            },
            __self: this
        }, /*#__PURE__*/ _reactDefault.default.createElement("button", {
            type: "submit",
            class: "btn btn-primary",
            style: {
                display: 'flex',
                justifyContent: 'center'
            },
            __source: {
                fileName: "C:\\Users\\Nive files important for se\\SE lectures\\AF\\Researcher\\frontend\\component\\Researcher.js",
                lineNumber: 146
            },
            __self: this
        }, "Submit"))))))));
    }
}
exports.default = Researcher;

  helpers.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}