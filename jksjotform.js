JotForm.newDefaultTheme = false;
        JotForm.extendsNewTheme = false;
        JotForm.singleProduct = false;
        JotForm.newPaymentUIForNewCreatedForms = false;
        JotForm.clearFieldOnHide = "disable";
        JotForm.init(function () {
            /*INIT-START*/
            if (window.JotForm && JotForm.accessible) $('input_8').setAttribute('tabindex', 0);
            if (window.JotForm && JotForm.accessible) $('input_13').setAttribute('tabindex', 0);
            if (window.JotForm && JotForm.accessible) $('input_4').setAttribute('tabindex', 0);
            /*INIT-END*/
        });
        JotForm.prepareCalculationsOnTheFly([null, null, {
            "name": "submit",
            "qid": "2",
            "text": "SUBMIT",
            "type": "control_button"
        }, null, {
            "name": "message4",
            "qid": "4",
            "text": "Message",
            "type": "control_textarea"
        }, null, null, {
            "name": "email",
            "qid": "7",
            "text": "E-mail",
            "type": "control_email"
        }, {
            "name": "fullName",
            "qid": "8",
            "subLabel": "",
            "text": "Full Name",
            "type": "control_textbox"
        }, {
            "name": "clickTo",
            "qid": "9",
            "text": "Contact Form",
            "type": "control_head"
        }, null, null, null, {
            "description": "",
            "name": "subject",
            "qid": "13",
            "subLabel": "",
            "text": "Subject",
            "type": "control_textbox"
        }, {
            "description": "",
            "name": "pleaseVerify",
            "qid": "14",
            "text": "Please verify that you are human",
            "type": "control_captcha"
        }, null, {
            "description": "",
            "name": "inquiryOr16",
            "qid": "16",
            "text": "Subject-Type",
            "type": "control_radio"
        }, null, {
            "description": "",
            "name": "phoneNumber",
            "qid": "18",
            "text": "Phone Number",
            "type": "control_phone"
        }]);
        setTimeout(function () {
            JotForm.paymentExtrasOnTheFly([null, null, {
                "name": "submit",
                "qid": "2",
                "text": "SUBMIT",
                "type": "control_button"
            }, null, {
                "name": "message4",
                "qid": "4",
                "text": "Message",
                "type": "control_textarea"
            }, null, null, {
                "name": "email",
                "qid": "7",
                "text": "E-mail",
                "type": "control_email"
            }, {
                "name": "fullName",
                "qid": "8",
                "subLabel": "",
                "text": "Full Name",
                "type": "control_textbox"
            }, {
                "name": "clickTo",
                "qid": "9",
                "text": "Contact Form",
                "type": "control_head"
            }, null, null, null, {
                "description": "",
                "name": "subject",
                "qid": "13",
                "subLabel": "",
                "text": "Subject",
                "type": "control_textbox"
            }, {
                "description": "",
                "name": "pleaseVerify",
                "qid": "14",
                "text": "Please verify that you are human",
                "type": "control_captcha"
            }, null, {
                "description": "",
                "name": "inquiryOr16",
                "qid": "16",
                "text": "Subject-Type",
                "type": "control_radio"
            }, null, {
                "description": "",
                "name": "phoneNumber",
                "qid": "18",
                "text": "Phone Number",
                "type": "control_phone"
            }]);
        }, 20);