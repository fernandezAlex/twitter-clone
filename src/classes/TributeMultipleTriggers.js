import Tribute from "tributejs";

export const tributeMultipleTriggers = new Tribute({
    collection: [
        {
            // The function that gets call on select that retuns the content to insert
            selectTemplate: function (item) {
                if (this.range.isContentEditable(this.current.element)) {
                    return (
                        '<a href="#" title="' +
                        item.original.email +
                        '">@' +
                        item.original.value +
                        "</a>"
                    );
                }

                return "@" + item.original.value;
            },

            // the array of objects
            values: [
                {
                    key: "Jordan Humphreys",
                    value: "Jordan Humphreys",
                    email: "getstarted@zurb.com"
                },
                {
                    key: "Sir Walter Riley",
                    value: "Sir Walter Riley",
                    email: "getstarted+riley@zurb.com"
                },
                {
                    key: "Joachim",
                    value: "Joachim",
                    email: "getstarted+joachim@zurb.com"
                }
            ]
        },
        {
            // The symbol that starts the lookup
            trigger: "#",
            loadingItemTemplate: '<div style="padding: 16px">Loading</div>',
            // The function that gets call on select that retuns the content to insert
            selectTemplate: function (item) {
                if (this.range.isContentEditable(this.current.element)) {
                    return (
                        '<a href="' +
                        item.original.link +
                        '">#' +
                        item.original.name.replace() +
                        "</a>"
                    );
                }

                return "#" + item.original.name;
            },
            // function retrieving an array of objects
            values: function (_, cb) {
                setTimeout(() => cb([
                    { name: "liver", link: "#" },
                    { name: "pain", link: "#" },
                    { name: "right", link: "#" },
                    { name: "left", link: "#" },
                    { name: "pancreas", link: "#" },
                    { name: "kidney", link: "#" },
                    { name: "brain", link: "#" },
                    { name: "severe_pain", link: "#" },
                    { name: "tumor", link: "#" },
                    { name: "cancer", link: "#" },
                    { name: "MRI", link: "#" },
                    { name: "CT", link: "#" },
                    { name: "male", link: "#" },
                    { name: "female", link: "#" },
                    { name: "bone", link: "#" },
                    { name: "shoulder", link: "#" },
                    { name: "hip", link: "#" },
                    { name: "XRAY", link: "#" },
                    { name: "knee", link: "#" },
                    { name: "spine", link: "#" },
                    { name: "head", link: "#" },
                    { name: "abdomen", link: "#" },
                    { name: "contrast", link: "#" },
                    { name: "fragment", link: "#" },
                    { name: "detached", link: "#" },
                    { name: "injury", link: "#" },
                    { name: "torn", link: "#" },
                    { name: "rotator", link: "#" },
                    { name: "cuff", link: "#" },
                    { name: "abdominal", link: "#" },
                    { name: "dilatation", link: "#" }
                ]), 1000)
            },
            lookup: "name",

            fillAttr: "name"
        }
    ]
});