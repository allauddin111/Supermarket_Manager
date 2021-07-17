let vibrantColor;
let DarkVibrantColor;
let lightVibrantColor;
let mutedColor;
let darkMuted;
let lastPageIndex = 0;
let isFormSubmitted = !1;
let isClickedFromButton = !1;
let pageIndex = 0;
let questionDiv;
let questionNumberMaintainer = 0;
let questionCard;
let formResponse = [];
let userEmailId = "";
let isDarkThemeEnabled = !1;
let isClassicThemeEnabled = !1;
let isDesktop = !1;
let totalQuestionCount = 0;
const QUESTION_ATTACHMENT_DOCUMENT = '<div id="question-attachment-container"  class="question-attachment-container"><div id="question-image-container" class="question-attachment"><div id="question-attachment-video-icon" class="attachment-video-icon"><i class="material-icons">play_arrow</i></div><img id="question-image" src="" onerror="handleImageError(this)"></div><div id="question-attachment-web-container" class="attachment-web-container"><img id="question-web-image" src="" onerror="handleWebImageError(this)"/><div id="question-attachment-text-container" class="attachment-text-container"><p id="question-attachment-title"></p><p id="question-attachment-description"></p><p id="question-attachment-url" class="attachment-url"></p></div></div></div>';

const SHORT_TEXT = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action"> ' + QUESTION_ATTACHMENT_DOCUMENT + '<div><textarea onkeydown="textAreaAutoExpand(this)" class="answer-text-field" field-type="SHORT_TEXT" name="answer" style="font-size: 18px; padding: 2.5px 0px 0px 0px;" id="textarea_short" maxlength="100" onchange="setQuestionCount()" oninput="placeTextLength(this)" onfocus="moveNextQuestionUI(this), showCharacterCounter(this), changeBottomBorderThemeOnFocus(this)" onblur="hideCharacterCounter(this), changeBottomBorderThemeOnBlur(this)" style="border-bottom-color: rgb(0,0,0)" rows="1"></textarea><label id="description" style="font-size: 14px; left:0px;" for="textarea1">Description</label><div id="character-counter"><span id="current-count">0</span><span>/</span><span id="total-count">100</span></div></div></div>';
const LONG_TEXT = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div><textarea onkeydown="textAreaAutoExpand(this)" class="answer-text-field" field-type="LONG_TEXT" name="answer" style="font-size: 18px; padding: 2.5px 0px 0px 0px;" id="textarea_short" maxlength="2500" onchange="setQuestionCount()" oninput="placeTextLength(this)" onfocus="moveNextQuestionUI(this), showCharacterCounter(this), changeBottomBorderThemeOnFocus(this)" onblur="hideCharacterCounter(this), changeBottomBorderThemeOnBlur(this)" style="border-bottom-color: rgb(0,0,0)" rows="1"></textarea><label id="description" style="font-size: 14px; left:0px;" for="textarea1">Description</label><div id="character-counter"><span id="current-count">0</span><span>/</span><span id="total-count">2500</span></div></div></div>';
const EMAIL = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div><input maxlength="100" field-type="EMAIL" name="answer" style="font-size: 18px;" id="email" type="email" class="answer-text-field-input"   onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this), changeBottomBorderThemeOnFocus(this)"  onblur="changeBottomBorderThemeOnBlur(this)"><label id="description" style="font-size: 14px; left:0px;" data-error="Invalid" for="email">Email</label></div></div></div>';
const NUMBER = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div><input maxlength="100" class="answer-text-field-input" onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this), changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" field-type="NUMBER" name="answer" type="number" style="font-size: 18px; -moz-appearance:textfield; -webkit-appearance: none;" ><label id="description" style="font-size: 14px; left:0px" for="icon_telephone">Telephone</label></div></div>';
const WEB_LINK = '<div class="card-content"><span id="question_text" class="card-title"></span></div>\n<div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div><textarea onkeydown="textAreaAutoExpand(this)" class="answer-text-field" field-type="WEB_LINK" name="answer" style="font-size: 18px; padding: 2.5px 0px 0px 0px;" id="textarea_web" oninput="setPreviewForWebLink(this)" onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this), changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" style="border-bottom-color: rgb(0,0,0)" rows="1"></textarea><label id="description" style="font-size: 14px; left:0px;" for="textarea1">Description</label><div id="answer-attachment-container" class="question-attachment-container"><div id="answer-image-container" class="question-attachment"><div id="answer-attachment-video-icon" class="attachment-video-icon"><i class="material-icons">play_arrow</i></div><img id="answer-image" src="" onerror="handleImageError(this)"></div><div id="answer-attachment-web-container" class="attachment-web-container" style="align-items: center"><img id="answer-web-image" src="" onerror="handleWebImageError(this)"/><div id="answer-attachment-text-container" class="attachment-text-container"><!--<p id="answer-attachment-title"></p><p id="answer-attachment-description"></p>--><p id="answer-attachment-url" class="attachment-url"></p></div></div></div></div></div>';

const MULTIPLE_CHOICE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<label id="description" style="font-size: 14px;">Radio label</label></div>';
const PICTURE_CHOICE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<label id="description" style="font-size: 14px;">Picture Choice</label></div>';
const CHECKBOX_CHOICE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<label id="description" style="font-size: 14px;">Checkbox label</label></div>';
const DROPDOWN_CHOICE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<a tabindex="0" onfocus="moveNextQuestionUI(this)"></a><div class="input-field"><div class="custom-select"> <select class="drop-down-select" field-type="DROPDOWN_CHOICE" name="answer" onfocus="moveNextQuestionUI(this)" onchange="setQuestionCount()"><option selected disabled hidden value="" style="display: none">Select</option></select></div><label id="description" style="font-size: 14px;">Drop Down</label></div></div>';
const YES_NO_CHOICE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div class="switch center-align" style="padding: 10px;"><label id="description" style="font-size: 14px;">Yes/No label</label><label>NO<input  onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this)" field-type="YES_NO_CHOICE" name="answer" type="checkbox"><span class="lever"></span>YES</label></div></div>';
const LINEAR_SCALE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<p class="range-field"><label id="description" style="font-size: 14px;">Scale</label><input  onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this)" field-type="LINEAR_SCALE" name="answer" oninput="showScaleValue(this)" style="font-size: 20px" type="range" id="test5" min="1" max="10"/><span class="scale_value" style="float:right">0/10</span></p></div>';
const RATING_SCALE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<div class="input-field col s12"><textarea field-type="RATING_SCALE" name="answer" style="font-size: 20px;" id="textarea1" class="materialize-textarea" data-length="120" maxlength="120"></textarea><label id="description" style="font-size: 14px;" for="textarea1">Description</label></div></div>';
const DATE = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<label id="description" style="font-size: 14px;">Date</label><input class="answer-text-field-input" onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this), changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" field-type="DATE" name="answer" type="date"></div>';
const TIME = '<div class="card-content"><span id="question_text" class="card-title"></span></div><div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<label id="description" style="font-size: 14px;">Time</label><input class="answer-text-field-input" onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this), changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" field-type="TIME" name="answer" type="time"></div>';
const FILE_UPLOAD = '<div class="card-content">\n    <span id="question_text" class="card-title"></span>\n</div>\n<div class="card-action" id="card-action">\n    ' + QUESTION_ATTACHMENT_DOCUMENT + '<div class="file-answer-field">\n        <input field-type="FILE_UPLOAD" style="display: none;" name="answer"\n                                          id="file-upload-input" type="file" class="validate"\n                                          onchange="setQuestionCount(), uploadFileToAWS(this.files[0], this.id)"\n                                          onfocus="moveNextQuestionUI(this)">\n        <label id="description" style="font-size: 14px;" for="textarea1">Description</label>\n        <div id="choose-file-button"  class="mdc-button mdc-button--raised upload-btn" data-mdc-auto-init="MDCRipple">\n            <div class="mdc-button__ripple"></div>\n            <span class="mdc-button__label submit-button-label">Upload File</span>\n        </div>\n        <img id="loader-gif" style=\'display:none; width: 20px; height: 20px\' src="/images/loader.gif">\n        <label class="file-name-label" id="file_name_label">No File Chosen</label>\n        <input style="display: none" readonly id="file_url_input"> \n        <img id="aws-file-delete-button" onclick="handleAwsFileDelete(this.name)" style=\'display:none; margin-left: 15px; width: 20px; height: 20px\' src="/images/close_black.svg">\n    </div>\n</div>';
const STAR_RATING = '<div class="card-content"><span id="question_text" class="card-title"></span> </div> <div class="card-action" id="card-action">' + QUESTION_ATTACHMENT_DOCUMENT + '<a tabindex="0" onfocus="moveNextQuestionUI(this)"></a><label id="description" style="font-size: 14px;">Star Rating</label><div class="star-rating-container" id="star-rating-container"> <div class="stars-container"> <div> <input type="radio" name="star-rating" value=1> <img src="/images/star_empty.svg"> </div> <div> <input type="radio" name="star-rating" value=2> <img src="/images/star_empty.svg"> </div> <div> <input type="radio" name="star-rating" value=3> <img src="/images/star_empty.svg"> </div> <div> <input type="radio" name="star-rating" value=4> <img src="/images/star_empty.svg"> </div> <div> <input type="radio" name="star-rating" value=5> <img src="/images/star_empty.svg"> </div> </div> <span id="rating-description-text"></span> </div> </div>';
const SECTION = '<div class="section-title-container"><h4 id="section-title"></h4>  <p id="section-description"></p></div>';
mdc.autoInit();
let isMobileView = !0;
document.getElementById("form-loader").style.display = "flex";
let mediaScale = window.matchMedia("(min-width: 800px)");
let bgImage = document.getElementById('formsapp_bg_image');
let isShowingToast = !1;
let toastContainer = document.getElementById("toast-container");
let triggerToastEvent;
let formPageContainer = document.getElementById("form_page_container");
let isPreviewFormCalledOldVersion = window.location.pathname.split('/').includes("preview");
let quizTimeInterval;
let isFileUploading = [];
const QUIZ_REPORT_ABUSE_FORM_LINK = "https://surveyheart.com/form/5f323faf7693da10a21c84c6";
//todo:change this in production
const AWS_LOGO_PATH = "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/logos/"
// const AWS_LOGO_PATH = "https://surveyheartmedia.s3.ap-south-1.amazonaws.com/test-logos/"

if (isPreviewFormCalledV1) {
    document.getElementById("disclaimer-text-container").style.display = "none";
    document.getElementById("response-suggestion-container").style.display = "none"
} else {
    if (isPreviewFormCalledOldVersion) {
        document.getElementById("disclaimer-text-container").style.display = "none";
        document.getElementById("response-suggestion-container").style.display = "none"
    }
    prepareFormView();
}

/*if (formData && formData._id && reportAbuseFormId === formData._id) {
    document.getElementById("disclaimer-text-container").style.display = "none"
}*/

function setFormPreviewData(newFormData) {
    let previewFormData = JSON.parse(decodeURIComponent(newFormData.replace(/\+/g, ' ')));
    if (formData !== previewFormData) {
        formData = previewFormData;
        reInitiateVariables();
        prepareFormView()
    }
    SurveyHeartInterfaceObject.onPreviewDataSent()
}

function reInitiateVariables() {
    lastPageIndex = 0;
    isFormSubmitted = !1;
    isClickedFromButton = !1;
    pageIndex = 0;
    questionNumberMaintainer = 0;
    formResponse = [];
    userEmailId = "";
    isDarkThemeEnabled = !1;
    isClassicThemeEnabled = !1;
    isDesktop = !1;
    totalQuestionCount = 0;
}

function showWelcomeScreen() {
    formPageContainer.style.display = "none";
    document.getElementById("welcome_screen_container").style.display = "flex";
    document.getElementById("formsapp_bg_image").style.filter = "blur(0)";
    document.getElementById("formsapp_bg_image").style.webkitFilter = "blur(0)"
}

function showFormScreenPage() {
    var currentPageIndex = window.location.hash.split('/');
    if (isClassicThemeEnabled) {
        document.body.style.backgroundColor = "#fafafa"
    }
    formPageContainer.style.display = "inline-block";
    document.getElementById("welcome_screen_container").style.display = "none";
    document.getElementById('page_' + Number(pageIndex)).style.display = "none";
    pageIndex = currentPageIndex[1];
    document.getElementById('page_' + pageIndex).style.display = "block";
    if (lastPageIndex > pageIndex) {
        window.scrollTo(0, document.body.scrollHeight)
    } else {
        window.scrollTo(0, 0)
    }
    setPageEndCard()
}

window.onhashchange = function (e) {
    if (!isFormSubmitted && !isClickedFromButton) {
        if (window.location.hash === '#welcome') {
            showWelcomeScreen()
        } else if (window.location.hash.startsWith('#form')) {
            showFormScreenPage()
        }
    }
    isClickedFromButton = !1
};

function prepareFormView() {
    if (formData.theme === "dark_theme") {
        isDarkThemeEnabled = !0
    } else if (formData.theme === "classic_theme") {
        isClassicThemeEnabled = !0
    }
    if (formData === undefined || formData === null || formData.pages.length === 0 || formData.pages[0].questions.length === 0) {
        window.location = "/errorpage"
    } else if (!formData.setting.allow_multiple_submit && window.localStorage !== null && window.localStorage.getItem(String(formData._id))) {
        let formId = window.localStorage.getItem(String(formData._id));
        if (formId != null && formId.length > 0) {
            let answerId = window.localStorage.getItem(String(formData._id) + "_answer_id");
            if (answerId && answerId.length > 0) {
                window.location = "/answer-sheet/" + answerId
            } else {
                window.location = "/answered"
            }
        }
    } else {
        document.getElementById("thank_screen_container").style.display = "none"
        buildForm();
        initializeUI();
        if (formData.welcome_screen.show_screen === undefined || formData.welcome_screen.show_screen) {
            if (isPreviewFormCalledV1) {
                showWelcomeScreen()
            }
            window.location.hash = "welcome";
            if (formData.welcome_screen.button_text.length > 0) {
                document.getElementById("start-survey-button-text").innerText = formData.welcome_screen.button_text
            }
            analytics('send', {
                hitType: 'event',
                eventCategory: 'Form',
                eventAction: 'View',
                eventLabel: 'welcome_page'
            })
        } else {
            startSurvey()
        }
    }
    /*if (formData !== undefined && formData.setting.allow_summary_view && formData.response_count !== undefined && formData.response_count <= 1000) {
        document.getElementById("view_summary_button").style.display = "inline-block"
    }*/
    /*if (formData.setting.allow_multiple_submit) {
        document.getElementById("add_response_button").style.display = "inline-block"
    }*/
    let isTitleShown = !0;
    $(document).ready(function () {
        var isScrollingTop = !1;
        var lastScrollTop = 0;
        $("#scroll_fab").on('click', function (event) {
            event.preventDefault();
            if (isScrollingTop) {
                $('html, body').animate({scrollTop: 0}, 800, function () {
                    $("#scroll_fab_icon").attr("class", "material-icons scroll-to-bottom");
                    isScrollingTop = !1
                });
                analytics('send', {
                    hitType: 'event',
                    eventCategory: 'Form',
                    eventAction: 'Clicked',
                    eventLabel: 'scroll_fab_top'
                })
            } else {
                $('html, body').animate({scrollTop: $(document).height()}, 800, function () {
                    $("#scroll_fab_icon").attr("class", "material-icons scroll-to-top");
                    isScrollingTop = !0
                });
                analytics('send', {
                    hitType: 'event',
                    eventCategory: 'Form',
                    eventAction: 'Clicked',
                    eventLabel: 'scroll_fab_bottom'
                })
            }
        });
        $(window).scroll(function (event) {
            let scrollPosition = $(this).scrollTop();
            if (scrollPosition > lastScrollTop || scrollPosition === 0) {
                $("#scroll_fab_icon").attr("class", "material-icons scroll-to-bottom");
                if (isTitleShown) {
                    if (scrollPosition > 0 && !isDesktop) {
                        isTitleShown = !1
                    }
                }
                isScrollingTop = !1
            } else {
                $("#scroll_fab_icon").attr("class", "material-icons scroll-to-top");
                if (!isTitleShown && !isDesktop) {
                    isTitleShown = !0
                }
            }
            if (scrollPosition + $(this).innerHeight() === $(document).height()) {
                $("#scroll_fab_icon").attr("class", "material-icons scroll-to-top");
                if (!isDesktop) {
                }
                isScrollingTop = !0
            }
            lastScrollTop = scrollPosition
        })
    });
}

function uploadFileToAWS(file, questionId) {
    if (isValidFile(file)) {
        let questionCard = document.getElementById(questionId + '_card');
        let loaderImgElement = questionCard.querySelector('#loader-gif');
        let deleteImgElement = questionCard.querySelector('#aws-file-delete-button');
        let fileNameElement = document.getElementById(questionId + '_label');
        loaderImgElement.style.display = 'inline-block';
        fileNameElement.style.display = 'none';
        isFileUploading.push(questionId);
        uploadFile(file, questionId, function (data, fileName) {
            if (data.Location) {
                isFileUploading.splice(isFileUploading.indexOf(questionId), 1);
                document.getElementById(questionId + '_url').value = data.Location;
                loaderImgElement.style.display = 'none';
                fileNameElement.innerText = file.name.length > 30 ? (file.name.substr(0, 30) + '... -' + getFileSizeInReadableFormat(file.size)) : file.name + ' - ' + getFileSizeInReadableFormat(file.size);
                fileNameElement.style.display = 'inline-block';
                deleteImgElement.style.display = 'inline-block';
                deleteImgElement.name = questionId;
            } else {
                isFileUploading.splice(isFileUploading.indexOf(questionId), 1);
                loaderImgElement.style.display = 'none';
                fileNameElement.style.display = 'inline-block';
                console.error('Something went wrong');
            }
        }, function (err) {
            console.log(err);
        })
    }
}

function handleAwsFileDelete(questionId) {
    const questionCardId = questionId + '_card';
    const questionCard = document.getElementById(questionCardId);
    let loaderImgElement = questionCard.querySelector('#loader-gif');
    let deleteImgElement = questionCard.querySelector('#aws-file-delete-button');
    let fileNameElement = document.getElementById(questionId + '_label');
    loaderImgElement.style.display = 'inline-block';
    deleteImgElement.style.display = 'none';
    fileNameElement.style.display = 'none';
    const fileNameInputElement = document.getElementById(questionId + '_url');
    const fileName = fileNameInputElement.value.split('/').pop();
    deleteFile(fileName, () => {
        document.getElementById(questionId).value = '';
        fileNameInputElement.value = ''
        fileNameElement.innerText = 'No File Chosen';
        fileNameElement.style.display = 'inline-block';
        loaderImgElement.style.display = 'none';
    })
}

function handleMediaQueries() {
    let img = new Image();
    img.crossOrigin = "Anonymous";
    if (mediaScale.matches) {
        isMobileView = !1;
        setElementVisiblity('next_fixed_button', !1);
        setElementVisiblity('previous-fixed-button-container', !1);
        setElementVisiblity('submit_fixed_button', !1);
        isDesktop = !0;
        document.getElementById('thank_screen_card').style.width = 'auto';
        if (formData.theme.startsWith("http")) {
            img.src = formData.theme
        } else {
            img.src = '/images/pc/' + formData.theme
        }
    } else {
        isMobileView = !0;
        if (formData.theme.startsWith("http")) {
            img.src = formData.theme
        } else {
            img.src = '/images/mobile/' + formData.theme
        }
    }
    bgImage.src = img.src;
    img.addEventListener('load', function () {
        setThemeColors(img);
        document.getElementById("form-loader").style.display = "none"
    }, !1);
    img.addEventListener('error', function () {
        isClassicThemeEnabled = !0;
        initializeUI()
    })
}

function initializeUI() {
    if (isDarkThemeEnabled) {
        bgImage.src = "";
        if (mediaScale.matches) {
            isMobileView = !1;
            setElementVisiblity('next_fixed_button', !1);
            setElementVisiblity('previous-fixed-button-container', !1);
            setElementVisiblity('submit_fixed_button', !1);
            isDesktop = !0;
            document.getElementById('thank_screen_card').style.width = 'auto'
        } else {
            isMobileView = !0
        }
        applyDarkTheme("#212121", "#000");
        document.getElementById("form-loader").style.display = "none"
    } else if (isClassicThemeEnabled) {
        bgImage.src = "";
        if (mediaScale.matches) {
            isMobileView = !1;
            setElementVisiblity('next_fixed_button', !1);
            setElementVisiblity('previous-fixed-button-container', !1);
            setElementVisiblity('submit_fixed_button', !1);
            isDesktop = !0;
            document.getElementById('thank_screen_card').style.width = 'auto'
        } else {
            isMobileView = !0
        }
        applyClassicTheme("#000", "#fff", "#212121");
        document.getElementById("form-loader").style.display = "none"
    } else {
        document.getElementById('formsapp_bg_image').style.display = "block";
        handleMediaQueries();
        mediaScale.addListener(handleMediaQueries);
        document.getElementById("form-loader").style.display = "none"
    }
}

function startSurvey() {
    if (formData != null
        && formData
        && formData.is_quiz) {
        showUserInfoPopup();
    } else {
        startSurveyUI();
    }
}

function startSurveyUI() {
    window.location.hash = 'form/0';
    formPageContainer.style.display = "inline-block";
    document.getElementById("welcome_screen_container").style.display = "none";
    document.getElementById("formsapp_bg_image").style.filter = "blur(4px)";
    document.getElementById("formsapp_bg_image").style.webkitFilter = "blur(4px)";
    analytics('send', {hitType: 'event', eventCategory: 'Form', eventAction: 'Clicked', eventLabel: 'start_survey'})
}

function moveToNextPage() {
    if (validateFormElements()) {
        saveFormData();
        document.getElementById('page_' + Number(pageIndex)).style.display = "none";
        pageIndex = pageIndex + 1;
        lastPageIndex = pageIndex;
        if (document.getElementById('page_' + Number(pageIndex)) !== null) {
            document.getElementById('page_' + Number(pageIndex)).style.display = "block";
            window.location.hash = "form/" + Number(pageIndex)
        }
        setPageEndCard();
        window.scrollTo(0, 0);
        isClickedFromButton = !0
    }
}

function moveToPreviousPage() {
    document.getElementById('page_' + Number(pageIndex)).style.display = "none";
    pageIndex = pageIndex - 1;
    lastPageIndex = pageIndex;
    document.getElementById('page_' + Number(pageIndex)).style.display = "block";
    isClickedFromButton = !0;
    window.scrollTo(0, document.body.scrollHeight);
    setPageEndCard();
    window.location.hash = "form/" + Number(pageIndex)
}

function validateFormElements() {
    let formContainerData = document.forms.form_container;
    let inCompleteQuestionItems = [];
    let questions = formData.pages[0].questions;
    let questionElement;
    let isValidEmail = !0;
    for (let i = 0; i < questions.length; i++) {
        questionElement = formContainerData[questions[i]._id];
        if (questions[i].is_required) {
            let isValidFormElement = !1;
            if (questions[i].type === QUESTION_TYPE.CHECKBOX_CHOICE) {
                let checkBoxOptions = [];
                if (questionElement.length !== undefined) {
                    for (let j = 0; j < questionElement.length; j++) {
                        checkBoxOptions.push(questionElement[j])
                    }
                } else {
                    checkBoxOptions[0] = questionElement
                }
                let isChecked = !1;
                for (let j = 0; j < checkBoxOptions.length; j++) {
                    if (checkBoxOptions[j].checked) {
                        isChecked = !0;
                        break
                    }
                }
                if (isChecked || (formContainerData["other_" + questions[i]._id] !== undefined && formContainerData["other_" + questions[i]._id].value.length > 0)) {
                    isValidFormElement = !0
                }
            } else if (questions[i].type === QUESTION_TYPE.MULTIPLE_CHOICE) {
                let isSingleOptionValidated = !0;
                if (questionElement.length === undefined) {
                    isSingleOptionValidated = questionElement.checked
                }
                let multipleChoiceOtherElement = formContainerData["other_" + questions[i]._id];
                if ((isSingleOptionValidated && questionElement.value.length > 0) || (multipleChoiceOtherElement !== undefined && multipleChoiceOtherElement.value.length > 0)) {
                    isValidFormElement = !0
                }
            } else if (questions[i].type === QUESTION_TYPE.DROPDOWN_CHOICE) {
                if (questionElement.value.length > 0) {
                    isValidFormElement = !0
                }
            } else if (questions[i].type === QUESTION_TYPE.STAR_RATING_SCALE) {
                if (questionElement.value.length > 0) {
                    isValidFormElement = !0;
                }
            } else if (questions[i].type === QUESTION_TYPE.FILE_UPLOAD) {
                if (formContainerData[questions[i]._id + '_url'].value.length > 0 && !(isFileUploading.indexOf(questions[i]._id) > -1)) {
                    isValidFormElement = !0;
                }
            } else if (questions[i].type === QUESTION_TYPE.LONG_TEXT
                || questions[i].type === QUESTION_TYPE.SHORT_TEXT
                || questions[i].type === QUESTION_TYPE.EMAIL
                || questions[i].type === QUESTION_TYPE.NUMBER
                || questions[i].type === QUESTION_TYPE.WEB_LINK
                || questions[i].type === QUESTION_TYPE.DATE
                || questions[i].type === QUESTION_TYPE.TIME) {
                if (questionElement.value.length > 0) {
                    isValidFormElement = !0;
                    if (questions[i].type === QUESTION_TYPE.EMAIL) {
                        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(questionElement.value)) {
                            isValidFormElement = !1;
                            isValidEmail = !1
                        }
                    } else if (questions[i].type === QUESTION_TYPE.WEB_LINK) {
                        if (!isValidUrl(questionElement.value)) {
                            isValidFormElement = !1;
                        }
                    }
                }
            }
            if (!isValidFormElement) {
                inCompleteQuestionItems.push(questions[i]._id)
            }
            let requiredTag = document.getElementById(questions[i]._id + '_req');
            if (!isValidFormElement) {
                requiredTag.style.backgroundColor = "#f44336";
                requiredTag.style.color = "#fff";
                if (questions[i].type === QUESTION_TYPE.EMAIL && !isValidEmail) {
                    requiredTag.innerHTML = "Invalid email address";
                    document.getElementById(questions[i]._id).style.borderBottomColor = "#f44336"
                } else if (questions[i].type === QUESTION_TYPE.FILE_UPLOAD) {
                    requiredTag.innerHTML = (isFileUploading.indexOf(questions[i]._id) > -1) ? "Uploading" : "File Required"
                } else if (questions[i].type === QUESTION_TYPE.WEB_LINK) {
                    requiredTag.innerHTML = (questionElement.value.length > 0) ? 'Invalid URL' : 'URL Required';
                    document.getElementById(questions[i]._id).style.borderBottomColor = "#f44336";
                } else {
                    requiredTag.innerHTML = "This question requires an answer"
                }
            } else {
                if (isDarkThemeEnabled) {
                    requiredTag.style.backgroundColor = "#000";
                    requiredTag.style.color = "#fff";
                } else if (isClassicThemeEnabled) {
                    requiredTag.style.backgroundColor = "#eeeeee";
                    requiredTag.style.color = "#000"
                } else {
                    requiredTag.style.backgroundColor = "#e8e8e8";
                    requiredTag.style.color = "#616161"
                }
                requiredTag.innerText = "Required";
                document.getElementById("toast-container").style.display = "none"
            }
        } else if (questions[i].type === QUESTION_TYPE.FILE_UPLOAD || questions[i].type === QUESTION_TYPE.WEB_LINK) {
            let cardAction = document.getElementById(questions[i]._id + "_a");
            if (isFileUploading.indexOf(questions[i]._id) > -1 ||
                ((questions[i].type === QUESTION_TYPE.WEB_LINK) &&
                    (questionElement.value.length > 0) && !isValidUrl(questionElement.value))) {
                inCompleteQuestionItems.push(questions[i]._id)
                if (document.getElementById(questions[i]._id + "_req")) {
                    document.getElementById(questions[i]._id + "_req").remove();
                }
                var requiredTag = getRequiredTagElement(questions[i]._id);
                requiredTag.style.backgroundColor = "#f44336";
                requiredTag.style.color = "#fff";
                requiredTag.innerHTML = (questions[i].type === QUESTION_TYPE.WEB_LINK) ? 'Invalid URL' : 'Uploading';
                cardAction.appendChild(requiredTag);
            } else {
                if (document.getElementById(questions[i]._id + "_req")) {
                    document.getElementById(questions[i]._id + "_req").remove();
                }
            }
        }
    }
    if (inCompleteQuestionItems.length > 0) {
        if (inCompleteQuestionItems.length === 1) {
            let toastText = "1 - Question requires answer";
            showToast(toastText)
        } else {
            let toastText = inCompleteQuestionItems.length + " - Questions requires answers";
            showToast(toastText)
        }
        if (document.activeElement !== null && document.activeElement !== undefined) {
            document.activeElement.blur()
        }
        if (document.getElementById(inCompleteQuestionItems[0]) !== null && document.getElementById(inCompleteQuestionItems[0]) !== undefined) {
            document.getElementById(inCompleteQuestionItems[0]).focus()
        } else {
            document.getElementById(inCompleteQuestionItems[0] + "_card").focus()
        }
        document.getElementById(inCompleteQuestionItems[0] + "_card").scrollIntoView({
            behavior: "smooth",
            block: "center"
        })
    }
    return inCompleteQuestionItems.length === 0
}

function getRequiredTagElement(questionId) {
    var requiredTag = document.createElement('div');
    requiredTag.className = 'chip';
    requiredTag.id = questionId + "_req";
    return requiredTag
}

function submitForm() {
    if (isQuizTimeUp || validateFormElements()) {
        if (quizTimeInterval) {
            clearInterval(quizTimeInterval);
        }
        executeSubmission();

        function executeSubmission() {
            saveFormData();
            var formSubmitData = {
                form_id: formData._id,
                email: userEmailId,
                responses: formResponse,
                submit_time: String(new Date().getTime()),
            };
            isFormSubmitted = !0;
            if (isPreviewFormCalledV1 || isPreviewFormCalledOldVersion) {
                initializeSuccessAnimation();
                triggerSuccessAnimation()
            } else {
                if (formData
                    && formData.is_quiz
                    && formSubmitData) {
                    formSubmitData.quiz_data = {
                        user_info: quizUserInfo,
                    };
                    if (formData.is_quizzory_v2) {
                        formSubmitData.is_quizzory_v2 = formData.is_quizzory_v2;
                    }
                }
                makeServerRequest('/answer', REQUEST_METHOD.POST, JSON.stringify(formSubmitData), function callBackFunction(response) {
                    const responseData = JSON.parse(response);
                    if (responseData.status === 200) {
                        if (window.localStorage !== null) {
                            window.localStorage.setItem(String(formData._id), String(formData._id))
                        }
                        if (responseData.answer_id
                            && formData.setting.allow_summary_view) {
                            window.location = "/answer-sheet/" + responseData.answer_id;
                        } else {
                            triggerSuccessAnimation();
                            if (isQuizChoiceQuestionPresent() && formData.setting.allow_summary_view) {
                                showQuizResult(responseData.results);
                            } else {
                                document.getElementById("quiz-score-card-container").style.display = "none";
                                document.getElementById("thank_screen_card_header").style.borderRadius = "12px";
                                document.getElementById("thank_screen_card").style.height = "auto";
                            }
                        }
                        analytics('send', {
                            hitType: 'event',
                            eventCategory: 'Form',
                            eventAction: 'Clicked',
                            eventLabel: 'submit_form'
                        })
                    } else {
                        analytics('send', {
                            hitType: 'event',
                            eventCategory: 'Form',
                            eventAction: 'Clicked',
                            eventLabel: 'submit_form_failed'
                        })
                    }
                })
            }
            formPageContainer.style.display = "none";
            document.getElementById("thank_screen_container").style.display = "flex"
        }
    }
}

/*function calculateQuizV2Result(responses) {
    let totalQuestionCount = getQuizQuestionCount();
    let correctAnswerCount = 0;
    let skippedAnswerCount = 0;
    let wrongAnswerCount = 0;
    let currentResponse;
    for (let i = 0; i < responses.length; i++) {
        currentResponse = responses[i];
        if (currentResponse.type === QUESTION_TYPE.MULTIPLE_CHOICE
            || currentResponse.type === QUESTION_TYPE.DROPDOWN_CHOICE) {
            if (currentResponse.choice) {
                let validatedIndex = validateAnswer(currentResponse.question_id, currentResponse.choice)
                if (validatedIndex === 1) {
                    correctAnswerCount += 1;
                } else if (validatedIndex === 0) {
                    wrongAnswerCount += 1;
                }
            } else {
                skippedAnswerCount += 1;
            }
        }
    }
    return {
        total: totalQuestionCount,
        correct: correctAnswerCount,
        correct_percentage: getPercentage(correctAnswerCount, totalQuestionCount),
        wrong: wrongAnswerCount,
        skipped: skippedAnswerCount
    };
}

function getQuizQuestionCount() {
    let totalQuestionCount = 0;
    let questions = formData.pages[0].questions;
    let currentQuestion;
    for (let i = 0; i < questions.length; i++) {
        currentQuestion = questions[i];
        if (currentQuestion.type === QUESTION_TYPE.MULTIPLE_CHOICE
            || currentQuestion.type === QUESTION_TYPE.DROPDOWN_CHOICE) {
            totalQuestionCount += 1;
        }
    }
    return totalQuestionCount;
}

function validateAnswer(questionId, choiceId) {
    let questions = formData.pages[0].questions;
    let currentQuestion;
    let choices;
    let currentChoice;
    for (let i = 0; i < questions.length; i++) {
        currentQuestion = questions[i]
        if (currentQuestion.type === QUESTION_TYPE.MULTIPLE_CHOICE
            || currentQuestion.type === QUESTION_TYPE.DROPDOWN_CHOICE) {
            if (currentQuestion._id === questionId) {
                choices = currentQuestion.choices;
                for (let j = 0; j < choices.length; j++) {
                    currentChoice = choices[j];
                    if (currentChoice._id === choiceId
                        && currentChoice.is_answer) {
                        return 1;
                    }
                }
                return 0;
            }
        }
    }
    return -1;
}*/


function isAndroid() {
    var ua = navigator.userAgent.toLowerCase();
    return ua.indexOf("android") > -1
}

function saveFormData() {
    let formContainerData = document.forms.form_container;
    var formElement;
    var currentFormData;
    var previousFormDataId;
    let otherOption;
    let isValidForm = !0;
    let count = 0;
    for (var a = 0; a < formData.pages.length; a++) {
        var formQuestions = formData.pages[a].questions;
        for (var i = 0; i < formQuestions.length; i++) {
            count = count + 1;
            if (formContainerData[formQuestions[i]._id] !== undefined) {
                currentFormData = formContainerData[formQuestions[i]._id];
                formElement = {question_id: formQuestions[i]._id, type: formQuestions[i].type};
                if (formQuestions[i].type === QUESTION_TYPE.CHECKBOX_CHOICE) {
                    let options = formContainerData[formQuestions[i]._id];
                    var optionValues = [];
                    for (let j = 0; j < options.length; j++) {
                        if (options[j].checked === !0) {
                            optionValues.push(options[j].value)
                        }
                    }
                    formElement.choices = optionValues;
                    otherOption = document.getElementById("other_" + formQuestions[i]._id);
                    if (otherOption !== undefined && otherOption !== null && otherOption.value.length > 0) {
                        formElement.others = otherOption.value
                    }
                } else if (formQuestions[i].type === QUESTION_TYPE.MULTIPLE_CHOICE || formQuestions[i].type === QUESTION_TYPE.DROPDOWN_CHOICE) {
                    let optionContainerData = formContainerData[formQuestions[i]._id];
                    let options = [];
                    if (optionContainerData.length === undefined) {
                        options.push(optionContainerData)
                    } else {
                        options = optionContainerData
                    }
                    if (formQuestions[i].type === QUESTION_TYPE.DROPDOWN_CHOICE) {
                        formElement.choice = document.getElementById(currentFormData.id).value
                    } else {
                        for (let j = 0; j < options.length; j++) {
                            if (options[j].checked === !0) {
                                formElement.choice = currentFormData.value;
                                break
                            }
                        }
                        if (formQuestions[i].type === QUESTION_TYPE.MULTIPLE_CHOICE) {
                            otherOption = document.getElementById("other_" + formQuestions[i]._id);
                            if (otherOption !== undefined && otherOption !== null && otherOption.value.length > 0) {
                                formElement.others = otherOption.value
                            }
                        }
                    }
                } else if (formQuestions[i].type === QUESTION_TYPE.NUMBER) {
                    formElement.text = currentFormData.value
                } else if (formQuestions[i].type === QUESTION_TYPE.LINEAR_SCALE) {
                    formElement.scale = Number(currentFormData.value)
                } else if (formQuestions[i].type === QUESTION_TYPE.YES_NO_CHOICE) {
                    if (currentFormData.value === 'on') {
                        formElement.choice = !0
                    } else {
                        formElement.choice = !1
                    }
                } else if (formQuestions[i].type === QUESTION_TYPE.STAR_RATING_SCALE) {
                    formElement.choice = currentFormData.value
                } else if (formQuestions[i].type === QUESTION_TYPE.FILE_UPLOAD) {
                    formElement.file_url = formContainerData[formQuestions[i]._id + '_url'].value
                } else if (formQuestions[i].type === QUESTION_TYPE.WEB_LINK) {
                    formElement.web_url = currentFormData.value
                } else {
                    formElement.text = currentFormData.value
                }
                previousFormDataId = currentFormData.name;
                var itemIndex = isItemPresentInArray(formResponse, currentFormData.name);
                if (itemIndex === -1) {
                    formResponse.push(formElement)
                } else {
                    formResponse[itemIndex] = formElement
                }
            }
        }
    }
}

function isItemPresentInArray(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].question_id === item) {
            return i
        }
    }
    return -1
}

function setWelcomePageData() {
    document.title = formData.welcome_screen.title + " - SurveyHeart";
    document.getElementById("welcome_title_text").innerText = formData.welcome_screen.title;
    document.getElementById("welcome_description_container").innerText = formData.welcome_screen.description;
    document.querySelector('meta[name="description"]').setAttribute("content", formData.welcome_screen.description);
    document.getElementById("form_title_top_nav").innerText = formData.welcome_screen.title;
    if (formData.setting.hasOwnProperty("is_show_logo") && formData.setting.is_show_logo) {
        document.getElementById("form-logo").style.display = "block";
        document.getElementById("form-logo").src = AWS_LOGO_PATH + formData.user_id + "_logo.png?id=" + new Date().getTime();
    } else {
        document.getElementById("form-logo").style.display = "none"
    }
}

function buildForm() {
    setWelcomePageData();
    var pageDiv;
    var isShuffleQuestion = formData.setting.is_shuffled;
    let coreFormContainer = document.getElementById('form_container');
    coreFormContainer.innerHTML = "";
    for (let a = 0; a < formData.pages.length; a++) {
        pageDiv = document.createElement('div');
        pageDiv.id = 'page_' + a;
        coreFormContainer.appendChild(pageDiv);
        var currentQuestions = formData.pages[a].questions;
        if (isShuffleQuestion) {
            currentQuestions = shuffleQuestions(currentQuestions)
        }
        for (var i = 0; i < currentQuestions.length; i++) {
            setQuestion(currentQuestions[i], pageDiv.id, i);
            if (currentQuestions[i].type !== QUESTION_SECTION) {
                totalQuestionCount = totalQuestionCount + 1
            }
        }
        if (a > 0) {
            pageDiv.style.display = "none"
        }
    }
    setPageEndCard();
    /*if (formData._id === reportAbuseFormId) {
        var url_string = window.location.href;
        var url = new URL(url_string);
        var reportId = url.searchParams.get("reportid");
        document.getElementById("5c6e9b629e8e9e7717ee1b16").innerText = reportId + " - " + new Date().toString();
        document.getElementById("5c6e9b629e8e9e7717ee1b16_card").style.display = "none"
    }*/
}

/*function shuffleQuestions(questions) {
    var currentIndex = questions.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = questions[currentIndex];
        questions[currentIndex] = questions[randomIndex];
        questions[randomIndex] = temporaryValue
    }
    return questions
}*/

function setQuestion(currentQuestion, pageId, questionIndex) {
    let showQuestionNumber = formData.setting.show_question_number;
    if (currentQuestion.type === QUESTION_SECTION) {
        let sectionContainer = document.createElement('div');
        sectionContainer.className = "section-container";
        sectionContainer.innerHTML = SECTION;
        document.getElementById(pageId).appendChild(sectionContainer);
        if (currentQuestion.title) {
            sectionContainer.querySelector("#section-title").innerText = currentQuestion.title
        }
        if (currentQuestion.description) {
            sectionContainer.querySelector("#section-description").innerText = currentQuestion.description
        }
    } else {
        questionNumberMaintainer = questionNumberMaintainer + 1;
        questionDiv = getQuestionField(currentQuestion.type);
        if (questionDiv.length > 0) {
            questionDiv = questionDiv.replace('id="question_text"', 'id=' + currentQuestion._id + '_q');
            questionDiv = questionDiv.replace('name="answer"', 'name=' + currentQuestion._id + ' id=' + currentQuestion._id);
            questionDiv = questionDiv.replace('id="description"', 'id=' + currentQuestion._id + '_desc');
            questionDiv = questionDiv.replace('id="file_url_input"', 'id=' + currentQuestion._id + '_url');
            questionDiv = questionDiv.replace('id="file_name_label"', 'id=' + currentQuestion._id + '_label');
            questionDiv = questionDiv.replace('id="card-action"', 'id=' + currentQuestion._id + '_a');
            questionDiv = questionDiv.replace('id="validatorUI"', 'id=' + currentQuestion._id + '_validate');
            questionDiv = questionDiv.replace('id="material-icons"', 'id=' + currentQuestion._id + '_validate_btn');
            questionCard = document.createElement('div');
            questionCard.className = 'mdc-card form-question-card';
            questionCard.id = currentQuestion._id + '_card';
            questionCard.innerHTML = questionDiv;
            questionCard.style.margin = '8px 16px 16px';
            questionCard.style.boxShadow = '0 8px 10px 1px rgba(0, 0, 0, 0.2)';
            document.getElementById(pageId).appendChild(questionCard);
            if (showQuestionNumber) {
                document.getElementById(currentQuestion._id + '_q').innerHTML = (questionNumberMaintainer) + ". " + currentQuestion.title
            } else {
                document.getElementById(currentQuestion._id + '_q').innerHTML = currentQuestion.title
            }
            if (currentQuestion.attachment) {
                questionCard.querySelector("#question-attachment-container").style.display = "block";
                switch (currentQuestion.attachment.file_type) {
                    case "IMAGE":
                        questionCard.querySelector("#question-image-container").style.display = "flex";
                        questionCard.querySelector("#question-attachment-text-container").style.display = "none";
                        questionCard.querySelector("#question-image").src = currentQuestion.attachment.image_url;
                        break;
                    case "VIDEO":
                    case "WEBSITE":
                        if (currentQuestion.attachment.title || currentQuestion.attachment.description || currentQuestion.attachment.url) {
                            questionCard.querySelector("#question-attachment-text-container").style.display = "flex";
                            questionCard.querySelector("#question-attachment-title").innerText = currentQuestion.attachment.title;
                            questionCard.querySelector("#question-attachment-description").innerText = currentQuestion.attachment.description;
                            questionCard.querySelector("#question-attachment-url").innerText = currentQuestion.attachment.url
                        }
                        if (currentQuestion.attachment.file_type === "VIDEO") {
                            questionCard.querySelector("#question-image-container").style.display = "flex";
                            questionCard.querySelector("#question-attachment-video-icon").style.display = "flex";
                            questionCard.querySelector("#question-image").src = currentQuestion.attachment.image_url
                        } else {
                            questionCard.querySelector("#question-image-container").style.display = "none";
                            if (isMobileView) {
                                questionCard.querySelector("#question-attachment-text-container").style.width = "70%"
                            } else {
                                questionCard.querySelector("#question-attachment-text-container").style.width = "90%"
                            }
                            questionCard.querySelector("#question-web-image").style.display = "block";
                            questionCard.querySelector("#question-web-image").style.width = "30%";
                            questionCard.querySelector("#question-image").style.display = "none";
                            questionCard.querySelector("#question-web-image").src = currentQuestion.attachment.image_url
                        }
                        questionCard.querySelector("#question-attachment-container").onclick = function () {
                            window.open(currentQuestion.attachment.url)
                        };
                        break
                }
            }
            document.getElementById(currentQuestion._id + '_desc').style.display = "none";
            setControls(currentQuestion, questionIndex, questionCard);
            let cardAction = document.getElementById(currentQuestion._id + "_a");
            if (currentQuestion.is_required) {
                var requiredTag = getRequiredTagElement(currentQuestion._id);
                requiredTag.innerHTML = 'Required';
                cardAction.appendChild(requiredTag)
            }
        }
    }
}

function setControls(currentQuestion, questionIndex, questionCard) {
    var currentElement = document.getElementById(currentQuestion._id);
    var options;
    var option;
    if (pageIndex === 0 && questionIndex === 0 && currentElement !== null) {
        currentElement.focus()
    }
    switch (currentQuestion.type) {
        case QUESTION_TYPE.SHORT_TEXT:
            currentElement.setAttribute('data-length', currentQuestion.max_value);
            currentElement.minLength = currentQuestion.min_value;
            currentElement.maxLength = currentQuestion.max_value;
            break;
        case QUESTION_TYPE.LONG_TEXT:
            currentElement.setAttribute('data-length', currentQuestion.max_value);
            currentElement.minLength = currentQuestion.min_value;
            currentElement.maxLength = currentQuestion.max_value;
            questionCard.querySelector("#total-count").innerText = currentQuestion.max_value;
            break;
        case QUESTION_TYPE.EMAIL:
            break;
        case QUESTION_TYPE.NUMBER:
            break;
        case QUESTION_TYPE.MULTIPLE_CHOICE:
            options = currentQuestion.choices;
            if (formData.setting.is_shuffled) {
                options = shuffleOptions(options)
            }
            for (let i = 0; i < options.length; i++) {
                option = document.createElement('p');
                option.style.margin = "0 0 4px -10px";
                option.style.width = "100%";
                option.style.overflow = "hidden";
                option.innerHTML = '<div class="mdc-form-field">' + '<div class="mdc-radio">' + '<input field-type="MULTIPLE_CHOICE" onchange="removeOtherAnswer(this)" onfocus="moveNextQuestionUI(this)" ' + 'name=' + currentQuestion._id + ' id=' + currentQuestion.choices[i]._id + ' value=' + currentQuestion.choices[i]._id + ' class ="mdc-radio__native-control" type="radio"/>' + ' <div class="mdc-radio__background">\n' + '      <div class="mdc-radio__outer-circle"></div>\n' + '      <div class="mdc-radio__inner-circle"></div>\n' + ' </div>' + '<div class="mdc-radio__ripple"></div>' + '</div>' + '<label style="font-size: 18px;" for=' + currentQuestion.choices[i]._id + '>' + currentQuestion.choices[i].label + '</label>' + '</div>';
                document.getElementById(currentQuestion._id + '_a').appendChild(option);
                if (i === options.length - 1) {
                    if (currentQuestion.is_others_allowed) {
                        option = document.createElement('p');
                        option.style.margin = "0 0 4px -10px";
                        option.style.width = "100%";
                        option.style.overflowX = "hidden";
                        option.innerHTML = '<input field-type="MULTIPLE_CHOICE" maxlength="100" onchange="setQuestionCount()" onfocus="removeMultipleChoiceSelection(this), changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" ' + 'name=' + "other_" + currentQuestion._id + ' id=' + "other_" + currentQuestion._id + ' class="others-text-input" type="text" placeholder="Others"/>';
                        document.getElementById(currentQuestion._id + '_a').appendChild(option)
                    }
                }
            }
            break;
        case QUESTION_TYPE.PICTURE_CHOICE:
            options = currentQuestion.choices;
            if (formData.setting.is_shuffled) {
                options = shuffleOptions(options)
            }
            var optionContainer = document.createElement('div');
            optionContainer.className = 'picture_choice';
            optionContainer.id = currentQuestion._id + '_picture_choice';
            for (var i = 0; i < options.length; i++) {
                option = document.createElement('div');
                option.className = 'card  picture_choice_element';
                option.id = currentQuestion._id + '';
                option.innerHTML = '<div class="card-image">' + '<input field-type="PICTURE_CHOICE" onchange="setQuestionCount()" onfocus="moveNextQuestionUI(this)" style="opacity: 0;" value=' + currentQuestion.choices[i]._id + ' type="radio" id=' + currentQuestion.choices[i]._id + ' name=' + currentQuestion._id + '>' + '<img class="picture_choice_image" src="https://media.wired.com/photos/59d6b0848941a6378d5bb26e/master/w_2400,c_limit/mindfullness-TA.jpg">' + '<a id=' + currentQuestion.choices[i]._id + '_pic class="btn-floating halfway-fab waves-effect waves-light grey picture_check" ' + 'onclick="selectPictureChoice(this, \'' + optionContainer.id + '\', \'' + currentQuestion.choices[i]._id + '\')">' + '<i class="material-icons">done</i></a></div>' + '<div class="picture_choice_option"><p style="padding:5px; text-align:center; margin-bottom:10px">' + currentQuestion.choices[i].label + '</p></div>';
                optionContainer.appendChild(option)
            }
            document.getElementById(currentQuestion._id + '_a').appendChild(optionContainer);
            break;
        case QUESTION_TYPE.CHECKBOX_CHOICE:
            options = currentQuestion.choices;
            if (formData.setting.is_shuffled) {
                options = shuffleOptions(options)
            }
            for (var i = 0; i < options.length; i++) {
                option = document.createElement('p');
                option.style.margin = "0 0 6px -10px";
                option.style.width = "100%";
                option.style.overflow = "hidden";
                option.innerHTML = '<div class="mdc-form-field">' + '<div class="mdc-checkbox">' + '<input field-type="CHECKBOX_CHOICE" onchange="changeUIColor()" onfocus="moveNextQuestionUI(this)" ' + 'name=' + currentQuestion._id + ' id=' + currentQuestion.choices[i]._id + ' value=' + currentQuestion.choices[i]._id + ' class ="mdc-checkbox__native-control" type="checkbox">' + '   <div class="mdc-checkbox__background">' + '<svg class="mdc-checkbox__checkmark"\n' + '           viewBox="0 0 24 24">' + '        <path class="mdc-checkbox__checkmark-path"' + '              fill="none"' + '              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>' + '      </svg>' + '<div class="mdc-checkbox__mixedmark"></div>' + '   </div>' + '<div class="mdc-checkbox__ripple"></div>' + '</div>' + '<label style="font-size: 18px;" for=' + currentQuestion.choices[i]._id + '>' + currentQuestion.choices[i].label + '</label>' + '</div>';
                document.getElementById(currentQuestion._id + '_a').appendChild(option);
                if (i === options.length - 1) {
                    if (currentQuestion.is_others_allowed) {
                        option = document.createElement('p');
                        option.style.margin = "0 0 6px -10px";
                        option.style.width = "100%";
                        option.style.overflowX = "hidden";
                        option.innerHTML = '<input field-type="CHECKBOX_CHOICE" maxlength="100" onchange="setQuestionCount()" onfocus="changeBottomBorderThemeOnFocus(this)" onblur="changeBottomBorderThemeOnBlur(this)" ' + 'name=' + "other_" + currentQuestion._id + ' id=' + "other_" + currentQuestion._id + ' class="others-text-input" type="text" placeholder="Others"/>';
                        document.getElementById(currentQuestion._id + '_a').appendChild(option)
                    }
                }
            }
            break;
        case QUESTION_TYPE.DROPDOWN_CHOICE:
            questionCard.querySelector("a").name = currentQuestion._id;
            options = currentQuestion.choices;
            if (formData.setting.is_shuffled) {
                options = shuffleOptions(options)
            }
            for (var i = 0; i < options.length; i++) {
                option = '<option onfocus="moveNextQuestionUI(this)" value =' + options[i]._id + '>' + options[i].label + '</option>';
                currentElement.innerHTML = currentElement.innerHTML + option
            }
            initializeDropDownElement(currentElement);
            break;
        case QUESTION_TYPE.YES_NO_CHOICE:
            currentElement.checked = currentQuestion.is_yes;
            break;
        case QUESTION_TYPE.LINEAR_SCALE:
            currentElement.min = currentQuestion.start_scale_value;
            currentElement.max = currentQuestion.end_scale_value;
            var scaleValue = document.getElementById(currentQuestion._id + '_a').getElementsByClassName('scale_value');
            scaleValue[0].innerHTML = currentElement.value + "/" + currentElement.max;
            break;
        case QUESTION_TYPE.STAR_RATING_SCALE:
            questionCard.querySelector("a").name = currentQuestion._id;
            let ratingTextList = [];
            let currentChoice;
            for (let i = 0; i < currentQuestion.choices.length; i++) {
                currentChoice = currentQuestion.choices[i];
                ratingTextList.push(currentChoice.label)
            }
            initializeStarRatingElement(questionCard.querySelector("#star-rating-container"), currentQuestion.choices, currentQuestion._id);
            break;
        case QUESTION_TYPE.RATING_SCALE:
            break;
        case QUESTION_TYPE.DATE:
            break;
        case QUESTION_TYPE.TIME:
            break;
        case QUESTION_TYPE.FILE_UPLOAD:
            questionCard.querySelector("#choose-file-button").onclick = function (e) {
                currentElement.click()
            }
            break
    }
    mdc.autoInit()
}

function changeUIColor() {
    setQuestionCount()
}

function removeMultipleChoiceSelection(element) {
    let nodes = element.parentNode.parentNode.childNodes;
    let childrenNodes;
    for (let i = 0; i < nodes.length; i++) {
        childrenNodes = nodes[i];
        if (childrenNodes.nodeName === "P") {
            if (childrenNodes.childNodes[0].childNodes[0] !== undefined) {
                if (childrenNodes.childNodes[0].childNodes[0].childNodes[0].nodeName === "INPUT") {
                    childrenNodes.childNodes[0].childNodes[0].childNodes[0].checked = !1
                }
            }
        }
    }
}

function removeOtherAnswer(element) {
    let otherElement = document.getElementById("other_" + element.name);
    if (otherElement !== undefined && otherElement !== null) {
        document.getElementById("other_" + element.name).value = ""
    }
    setQuestionCount()
}

function selectPictureChoice(selectedOption, parentId, radioElementId) {
    var radioElement = document.getElementById(radioElementId);
    var pictureOptions = document.getElementById(parentId).getElementsByClassName("btn-floating");
    for (var i = 0; i < pictureOptions.length; i++) {
        if (pictureOptions[i].id === selectedOption.id) {
            pictureOptions[i].classList.remove("grey");
            pictureOptions[i].classList.add("green");
            radioElement.checked = !0
        } else {
            pictureOptions[i].classList.remove("green");
            pictureOptions[i].classList.add("grey")
        }
    }
}

function initializeDropDownElement(currentSelectElement) {
    let j, defaultSelectedOption, dropDownList, optionList, currentOption;
    defaultSelectedOption = document.createElement("DIV");
    defaultSelectedOption.setAttribute("class", "select-selected");
    defaultSelectedOption.innerHTML = currentSelectElement.options[currentSelectElement.selectedIndex].innerHTML;
    currentSelectElement.parentNode.insertBefore(defaultSelectedOption, currentSelectElement);
    dropDownList = document.createElement("DIV");
    dropDownList.setAttribute("class", "select-items select-hide");
    let searchElement = document.createElement("input");
    searchElement.className = "select-search-input";
    searchElement.placeholder = "Search";
    dropDownList.appendChild(searchElement);
    dropDownList.appendChild(prepareOptionList());
    currentSelectElement.parentNode.insertBefore(dropDownList, currentSelectElement);
    defaultSelectedOption.addEventListener("click", function (e) {
        defaultSelectedOption.innerText = "Select";
        defaultSelectedOption.style.color = "#9e9e9e";
        e.stopPropagation();
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
        searchElement.value = "";
        optionList.remove();
        dropDownList.appendChild(prepareOptionList());
        formPageContainer.onclick = function (e) {
            if (e.target.className !== "select-search-input") {
                setQuestionCount();
                closeDropDownList()
            }
        }
    });
    formPageContainer.onclick = function () {
        closeDropDownList()
    };
    searchElement.oninput = function () {
        handleSearch(this.value)
    };

    function prepareOptionList() {
        optionList = document.createElement("div");
        optionList.className = "options-container";
        for (j = 1; j < currentSelectElement.length; j++) {
            currentOption = document.createElement("DIV");
            currentOption.style.width = "100%";
            currentOption.style.maxHeight = "44px";
            currentOption.style.overflow = "hidden";
            currentOption.style.whiteSpace = "nowrap";
            currentOption.style.textOverflow = "ellipsis";
            currentOption.innerHTML = currentSelectElement.options[j].innerHTML;
            currentOption.setAttribute("option_id", currentSelectElement.options[j].value);
            currentOption.addEventListener("click", function (e) {
                let previouslySelectedElement, i, k, selectElement, selectedOptionDiv;
                selectedOptionDiv = this.parentNode.parentNode.previousSibling;
                for (i = 0; i < currentSelectElement.length; i++) {
                    if (currentSelectElement.options[i].value === this.getAttribute("option_id")) {
                        currentSelectElement.selectedIndex = i;
                        selectedOptionDiv.innerHTML = this.innerHTML;
                        previouslySelectedElement = this.parentNode.getElementsByClassName("same-as-selected");
                        for (k = 0; k < previouslySelectedElement.length; k++) {
                            previouslySelectedElement[k].removeAttribute("class")
                        }
                        this.setAttribute("class", "same-as-selected");
                        break
                    }
                }
                defaultSelectedOption.innerHTML = currentSelectElement.options[currentSelectElement.selectedIndex].innerHTML;
                defaultSelectedOption.style.color = "#212121";
                defaultSelectedOption.style.width = "100%";
                defaultSelectedOption.style.maxHeight = "44px";
                defaultSelectedOption.style.overflow = "hidden";
                defaultSelectedOption.style.whiteSpace = "nowrap";
                defaultSelectedOption.style.textOverflow = "ellipsis"
            });
            optionList.appendChild(currentOption)
        }
        return optionList
    }

    function closeDropDownList() {
        defaultSelectedOption.classList.remove("select-arrow-active");
        dropDownList.classList.add("select-hide");
        let previouslySelectedOption = dropDownList.getElementsByClassName("same-as-selected");
        if (previouslySelectedOption[0] !== undefined) {
            defaultSelectedOption.innerHTML = previouslySelectedOption[0].innerHTML;
            if (isDarkThemeEnabled) {
                defaultSelectedOption.style.color = "#fff"
            } else {
                defaultSelectedOption.style.color = "#212121"
            }
        }
        formPageContainer.onclick = null
    }

    function handleSearch(inputValue) {
        optionList.innerHTML = "";
        for (j = 1; j < currentSelectElement.length; j++) {
            if ((currentSelectElement.options[j].innerHTML.toLowerCase()).includes(inputValue.toLowerCase())) {
                currentOption = document.createElement("DIV");
                currentOption.style.width = "100%";
                currentOption.style.maxHeight = "44px";
                currentOption.style.overflow = "hidden";
                currentOption.style.whiteSpace = "nowrap";
                currentOption.style.textOverflow = "ellipsis";
                currentOption.innerHTML = currentSelectElement.options[j].innerHTML;
                currentOption.setAttribute("option_id", currentSelectElement.options[j].value);
                currentOption.addEventListener("click", function (e) {
                    let previouslySelectedElement, i, k, selectElement, selectedOptionDiv;
                    selectedOptionDiv = this.parentNode.parentNode.previousSibling;
                    for (i = 0; i < currentSelectElement.length; i++) {
                        if (currentSelectElement.options[i].value === this.getAttribute("option_id")) {
                            currentSelectElement.selectedIndex = i;
                            selectedOptionDiv.innerHTML = this.innerHTML;
                            previouslySelectedElement = this.parentNode.getElementsByClassName("same-as-selected");
                            for (k = 0; k < previouslySelectedElement.length; k++) {
                                previouslySelectedElement[k].removeAttribute("class")
                            }
                            this.setAttribute("class", "same-as-selected");
                            break
                        }
                    }
                    defaultSelectedOption.innerHTML = currentSelectElement.options[currentSelectElement.selectedIndex].innerHTML;
                    defaultSelectedOption.style.color = "#212121"
                });
                optionList.appendChild(currentOption)
            }
        }
    }
}

function initializeStarRatingElement(starRatingContainer, choices, id) {
    let starElements = starRatingContainer.getElementsByTagName("img");
    let inputElements = starRatingContainer.getElementsByTagName("input");
    let ratingDescriptionText = starRatingContainer.querySelector("#rating-description-text");
    let currentStarElement;
    for (let i = 0; i < starElements.length; i++) {
        currentStarElement = starElements[i];
        currentStarElement.onclick = function () {
            ratingDescriptionText.innerText = choices[i].label;
            ratingDescriptionText.style.color = starRatingColors[i];
            inputElements[i].checked = !0;
            for (let j = 0; j < starElements.length; j++) {
                if (j <= i) {
                    starElements[j].src = "/images/star_filled.svg"
                } else {
                    starElements[j].src = "/images/star_empty.svg"
                }
            }
        };
        inputElements[i].name = id;
        inputElements[i].value = choices[i]._id
    }
}

function setWelcomeCard() {
    var welcomeCardDiv = document.createElement('div');
    welcomeCardDiv.className = 'section fp-auto-height';
    welcomeCardDiv.innerHTML = '';
    document.getElementById('form_container').appendChild(welcomeCardDiv)
}

function setPageEndCard() {
    if (parseInt(formData.pages.length - 1) === parseInt(pageIndex)) {
        setElementVisiblity('submission', !0);
        setElementVisiblity('next_page', !1);
        setElementVisiblity('submit_fixed_button_container', !0);
        setElementVisiblity('next_fixed_button_container', !1)
    } else {
        setElementVisiblity('next_page', !0);
        setElementVisiblity('submission', !1);
        setElementVisiblity('next_fixed_button_container', !0);
        setElementVisiblity('submit_fixed_button_container', !1)
    }
    if (pageIndex > 0) {
        setElementVisiblity('previous_page', !0);
        if (!isDesktop) {
            setElementVisiblity('previous_fixed_button', !0)
        }
    } else {
        setElementVisiblity('previous_page', !1);
        setElementVisiblity('previous_fixed_button', !1)
    }
    setQuestionCount()
}

function setQuestionCount() {
    document.getElementById('answered_question_count').innerText = getAnsweredQuestionCount();
    document.getElementById('total_question_count').innerText = ' of ' + totalQuestionCount
}

function setPageCount() {
    document.getElementById('current_page_count').innerText = Number(pageIndex + 1);
    document.getElementById('total_page_count').innerText = ' of ' + formData.pages.length
}

function getQuestionField(type) {
    switch (type) {
        case QUESTION_TYPE.SHORT_TEXT:
            return SHORT_TEXT;
        case QUESTION_TYPE.LONG_TEXT:
            return LONG_TEXT;
        case QUESTION_TYPE.EMAIL:
            return EMAIL;
        case QUESTION_TYPE.NUMBER:
            return NUMBER;
        case QUESTION_TYPE.WEB_LINK:
            return WEB_LINK;
        case QUESTION_TYPE.MULTIPLE_CHOICE:
            return MULTIPLE_CHOICE;
        case QUESTION_TYPE.PICTURE_CHOICE:
            return PICTURE_CHOICE;
        case QUESTION_TYPE.CHECKBOX_CHOICE:
            return CHECKBOX_CHOICE;
        case QUESTION_TYPE.DROPDOWN_CHOICE:
            return DROPDOWN_CHOICE;
        case QUESTION_TYPE.YES_NO_CHOICE:
            return YES_NO_CHOICE;
        case QUESTION_TYPE.LINEAR_SCALE:
            return LINEAR_SCALE;
        case QUESTION_TYPE.RATING_SCALE:
            return RATING_SCALE;
        case QUESTION_TYPE.STAR_RATING_SCALE:
            return STAR_RATING;
        case QUESTION_TYPE.DATE:
            return DATE;
        case QUESTION_TYPE.TIME:
            return TIME;
        case QUESTION_TYPE.FILE_UPLOAD:
            return FILE_UPLOAD;
        default:
            return ""
    }
}

function setElementVisiblity(elementId, isVisible) {
    if (isVisible) {
        document.getElementById(elementId).style.display = "inline-flex"
    } else {
        document.getElementById(elementId).style.display = "none"
    }
}

function shuffleOptions(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue
    }
    return array
}

function isRequired(itemId) {
    var isRequiredUsed = !1;
    pageIndex = Number(pageIndex);
    for (var i = 0; i < formData.pages[pageIndex].questions.length; i++) {
        if (itemId === formData.pages[pageIndex].questions[i]._id) {
            isRequiredUsed = formData.pages[pageIndex].questions[i].is_required;
            break
        }
    }
    return isRequiredUsed
}

function moveNextQuestionUI(inputElement) {
    document.getElementById(inputElement.name + '_card').style.opacity = 1;
    let navigateButton = document.getElementById('scroll_fab_navigate');
    navigateButton.style.display = 'flex';
    navigateButton.onclick = function () {
        this.disabled = !0;
        var tags = ['textarea', 'a', 'input', 'p'];
        var i;
        var nextFocus;
        for (i = 0; i < tags.length; i++) {
            let name = inputElement.name;
            nextFocus = document.getElementById(inputElement.name + '_card').nextElementSibling.getElementsByTagName(tags[i])[0];
            if (nextFocus !== null && nextFocus !== undefined) {
                if (nextFocus.id === "section-description") {
                    let nextCard = nextFocus.parentNode.parentNode.nextSibling;
                    for (let j = 0; j < tags.length; j++) {
                        nextFocus = nextCard.getElementsByTagName(tags[j])[0];
                        if (nextFocus !== null && nextFocus !== undefined) {
                            break
                        }
                    }
                }
                nextFocus.focus();
                nextFocus.scrollIntoView({behavior: "smooth", block: "center"});
                break
            }
        }
        analytics('send', {
            hitType: 'event',
            eventCategory: 'Form',
            eventAction: 'Clicked',
            eventLabel: 'scroll_fab_navigate'
        })
    };
    if (document.getElementById(inputElement.name + '_card') !== null && null == document.getElementById(inputElement.name + '_card').nextElementSibling) {
        navigateButton.style.display = 'none'
    }
}

function setThemeColors(img) {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches();
    if (swatches.hasOwnProperty('Vibrant') && swatches.Vibrant) {
        vibrantColor = swatches.Vibrant.getHex()
    }
    if (swatches.hasOwnProperty('DarkVibrant') && swatches.DarkVibrant) {
        DarkVibrantColor = swatches.DarkVibrant.getHex()
    }
    if (swatches.hasOwnProperty('LightVibrant') && swatches.LightVibrant) {
        lightVibrantColor = swatches.LightVibrant.getHex()
    }
    if (swatches.hasOwnProperty('Muted') && swatches.Muted) {
        mutedColor = swatches.Muted.getHex()
    }
    if (swatches.hasOwnProperty('DarkMuted') && swatches.DarkMuted) {
        darkMuted = swatches.DarkMuted.getHex()
    }
    if (vibrantColor === undefined) {
        vibrantColor = "#000"
    }
    if (DarkVibrantColor === undefined) {
        DarkVibrantColor = "#000"
    }
    applyVibrantTheme(vibrantColor, DarkVibrantColor)
}

function triggerSuccessAnimation() {
    $(document).ready(function () {
        setTimeout(function () {
            $('.circle-loader').toggleClass('load-complete');
            $('.submit-success').toggle();
            $('#submitted_success_text').text("Submitted")
        }, 500)
    })
}

function initializeSuccessAnimation() {
    document.getElementById("circle-loader").className = "circle-loader";
    document.getElementById("submit-success").style.display = "none";
    document.getElementById("submitted_success_text").innerText = ""
}

function getAnsweredQuestionCount() {
    let count = 0;
    let formArray = $("#form_container").serializeArray();
    let elements = document.forms.form_container.elements;
    let elementId = "";
    let countExistingElements = [];
    for (var i = 0; i < formArray.length; i++) {
        if (formArray[i].value.length > 0) {
            if (formArray[i].name !== elementId && countExistingElements.indexOf(formArray[i].name) === -1) {
                if (formArray[i].name.startsWith("other_")) {
                    if (countExistingElements.indexOf(formArray[i].name.split("_")[1]) === -1) {
                        countExistingElements.push(formArray[i].name.split("_")[1]);
                        count = count + 1
                    }
                } else {
                    countExistingElements.push(formArray[i].name);
                    count = count + 1
                }
            }
            elementId = formArray[i].name
        }
    }
    return count
}

function showScaleValue(scaleElement) {
    var scaleValue = document.getElementById(scaleElement.id + '_a').getElementsByClassName('scale_value');
    scaleValue[0].innerHTML = scaleElement.value + "/" + scaleElement.getAttribute('max')
}

function viewSummary() {
    var summaryWindow = window.open("/summary?id=" + String(formData._id), '_blank');
    summaryWindow.focus();
    analytics('send', {hitType: 'event', eventCategory: 'Form', eventAction: 'View', eventLabel: 'summary'})
}

function viewForm() {
    window.location.reload();
    analytics('send', {
        hitType: 'event',
        eventCategory: 'Form',
        eventAction: 'View',
        eventLabel: 'add_another_response'
    })
}

function reportAbuseFormClose() {
    document.getElementById("report-container").style.display = "none";
    analytics('send', {hitType: 'event', eventCategory: 'Form', eventAction: 'View', eventLabel: 'report_abuse_close'})
}

function reportAbuseFormOpen() {
    // document.getElementById("report-container").style.display = "flex";
    // document.getElementById("report-iframe").src = "/form/" + reportAbuseFormId + "?reportid=" + formData._id;
    let preFilledQuizData = JSON.stringify([{
        "qid": "5c6e9b629e8e9e7717ee1b16",
        "data": formData._id
    }]);
    window.open(QUIZ_REPORT_ABUSE_FORM_LINK + "?prefilleddata=" + preFilledQuizData)
    analytics('send', {hitType: 'event', eventCategory: 'Form', eventAction: 'View', eventLabel: 'report_abuse_open'})
}

function textAreaAutoExpand(selectedTextArea) {
    selectedTextArea.onkeydown = function () {
        selectedTextArea.style.height = "auto";
        selectedTextArea.style.height = selectedTextArea.scrollHeight + "px"
    }
}

function placeTextLength(element) {
    let currentCountElement = element.parentNode.querySelector("#current-count");
    currentCountElement.innerText = element.value.length
}

function showCharacterCounter(element) {
    element.parentNode.querySelector("#character-counter").style.visibility = "visible"
}

function hideCharacterCounter(element) {
    element.parentNode.querySelector("#character-counter").style.visibility = "hidden"
}

function showToast(info) {
    function getTriggerMobileToastEvent() {
        return setTimeout(function () {
            toastContainer.style.transform = "translateY(100px)";
            setTimeout(function () {
                toastContainer.style.display = "none";
                isShowingToast = !1
            }, 1000)
        }, 5000)
    }

    function getTriggerPcToastEvent() {
        return setTimeout(function () {
            toastContainer.style.transform = "translateX(350px)";
            setTimeout(function () {
                toastContainer.style.display = "none";
                isShowingToast = !1
            }, 1000)
        }, 5000)
    }

    if (!isMobileView) {
        toastContainer.className = "toast-container";
        if (!isShowingToast) {
            isShowingToast = !0;
            toastContainer.querySelector("#toast-text").innerText = info;
            toastContainer.style.display = "flex";
            setTimeout(function () {
                toastContainer.style.transform = "translateX(-350px)"
            }, 0);
            triggerToastEvent = getTriggerPcToastEvent()
        } else {
            toastContainer.querySelector("#toast-text").innerText = info;
            clearTimeout(triggerToastEvent);
            triggerToastEvent = getTriggerPcToastEvent()
        }
    } else {
        toastContainer.className = "mobile-toast";
        if (!isShowingToast) {
            isShowingToast = !0;
            toastContainer.querySelector("#toast-text").innerText = info;
            toastContainer.style.display = "flex";
            setTimeout(function () {
                toastContainer.style.transform = "translateY(-100px)"
            }, 0);
            triggerToastEvent = getTriggerMobileToastEvent()
        } else {
            toastContainer.querySelector("#toast-text").innerText = info;
            clearTimeout(triggerToastEvent);
            triggerToastEvent = getTriggerMobileToastEvent()
        }
    }
}

function applyMaterialElementsUIColors(primaryColor, secondaryColor) {
    var dynamicStyle = document.createElement('style');
    dynamicStyle.type = 'text/css';
    dynamicStyle.id = "material-UI-theme";
    dynamicStyle.innerHTML = ':root { --mdc-theme-primary: ' + primaryColor + '; --mdc-theme-secondary: ' + secondaryColor + '; }';
    document.body.appendChild(dynamicStyle)
}

function handleImageError(element) {
    if (element.id === "form-logo") {
        document.getElementById("form-logo").style.display = "none"
    } else {
        element.src = "/images/default_image.svg"
    }
}

function handleWebImageError(element) {
    element.src = "/images/link.svg"
}

function changeBottomBorderThemeOnFocus(element) {
    if (isDarkThemeEnabled) {
        element.style.borderBottomColor = "#fff"
    } else if (isClassicThemeEnabled) {
        element.style.borderBottomColor = "#000"
    } else {
        element.style.borderBottomColor = DarkVibrantColor
    }
}

function changeBottomBorderThemeOnBlur(element) {
    if (isDarkThemeEnabled) {
        element.style.borderBottomColor = "#9e9e9e"
    } else if (isClassicThemeEnabled) {
        element.style.borderBottomColor = "#bdbdbd"
    } else {
        element.style.borderBottomColor = "#e0e0e0"
    }
}

function applyDarkTheme(primaryColor, secondaryColor) {
    document.getElementById('formsapp_bg_image').style.display = "none";
    document.body.style.backgroundColor = secondaryColor;
    let welcomeTitleCard = document.getElementById("welcome_title_container");
    welcomeTitleCard.style.backgroundColor = "transparent";
    welcomeTitleCard.querySelector("#welcome_title_text").style.color = "#fff";
    welcomeTitleCard.querySelector("#welcome_description_container").style.color = "#fff";
    document.getElementById("start_survey_button").style.backgroundColor = primaryColor;
    document.getElementById("start_survey_button").style.border = "none";
    document.getElementById("start_survey_button").style.color = "#fff";
    /*    document.getElementById("view_summary_button").style.backgroundColor = primaryColor;
        document.getElementById("view_summary_button").style.color = "#fff";*/
    document.getElementById("add_response_button").style.backgroundColor = primaryColor;
    document.getElementById("add_response_button").style.color = "#fff";
    document.getElementById("submission").style.backgroundColor = primaryColor;
    document.getElementById("next_page").style.backgroundColor = primaryColor;
    document.getElementById("violation-alert-cancel").style.backgroundColor = secondaryColor;
    document.getElementById("violation-alert-accept").style.backgroundColor = secondaryColor;
    document.getElementById("fixed_navigation_bottom").style.backgroundColor = secondaryColor;
    document.getElementById("submit_fixed_button").style.color = "#fff";
    document.getElementById("total_question_count").style.color = primaryColor;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", secondaryColor);
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", secondaryColor);
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", secondaryColor);
    document.getElementById("form_title_top_nav").style.color = "#fff";
    document.getElementById("form_title_top_nav").style.textShadow = "none";
    let toastContainer = document.getElementById("toast-container");
    toastContainer.style.backgroundColor = "#fff";
    toastContainer.style.borderRadius = "0";
    toastContainer.querySelector("#toast-text").style.color = "#212121";
    document.getElementById("scroll_fab").style.backgroundColor = "#424242";
    document.getElementById("scroll_fab_navigate").style.backgroundColor = "#424242";
    document.getElementById("thank_screen_card").style.backgroundColor = "rgba(255, 255, 255, 0.8)";
    document.getElementById("thank_screen_card_header").style.backgroundColor = primaryColor;
    document.getElementById("quiz-user-info-title").style.color = primaryColor;
    document.getElementById("quiz-start").style.backgroundColor = primaryColor;
    document.getElementById("quiz-cancel").style.color = primaryColor;
    document.getElementById("thank_screen_container").style.backgroundColor = "#424242"
    document.getElementById("circle-loader").style.backgroundColor = primaryColor;
    document.getElementById("user-info-1").style.color = primaryColor;
    document.getElementById("user-info-2").style.color = primaryColor;
    document.getElementById("user-info-3").style.color = primaryColor;
    if (document.getElementById("applied-Theme-CSS") !== null) {
        document.getElementById("applied-Theme-CSS").remove()
    }
    if (document.getElementById("material-UI-theme") !== null) {
        document.getElementById("material-UI-theme").remove()
    }
    applyQuestionCardDarkCSS();
    applyMaterialElementsUIColors("#fff", "#000");

    function applyQuestionCardDarkCSS() {
        let dynamicStyle = document.createElement('style');
        dynamicStyle.type = 'text/css';
        dynamicStyle.id = "applied-Theme-CSS";
        dynamicStyle.innerHTML = '.form-question-card {background-color: #212121; margin: 8px 16px 16px} ' + '.card-content { background-color: transparent !important; padding: 24px 24px 0 24px !important;} ' + '.card-action { padding: 12px 24px 24px;}' + '.card-title {color: #fff} ' + '.others-text-input {color: #fff; border-bottom-color: #9e9e9e}' + '.answer-text-field {color: #fff; border-bottom-color: #9e9e9e} ' + '.answer-text-field {color: #fff}' + '.answer-text-field-input {color: #fff; border-bottom-color: #9e9e9e}' + '#character-counter {color: #fff}' + '.chip {background-color: #000; color: #fff; padding: 4px 12px;}' + '.mdc-radio__outer-circle {border-color: #fff !important}' + '.mdc-radio__inner-circle {border-color: #fff !important}' + '.mdc-checkbox__background {border-color: #fff !important}' + '.mdc-form-field label {color: #fff}' + '.select-selected {color: #fff; border-bottom-color: #9e9e9e}' + ' .select-selected:after {border-top-color: #fff}' + '.select-items div {color: #fff; border-color: #424242}' + '.select-items {background-color:' + primaryColor + '}' + '.select-selected.select-arrow-active:after {border-bottom-color: #fff}' + '.select-search-input {color: #fff; border-color: transparent #424242 transparent #424242;}' + '.section-title-container {background-color: transparent}' + '#section-title {color: #fff; text-shadow: 1px 1px rgba(0, 0, 0, 0.5)}' + '.question-attachment-container{background-color: #424242;}' + '#question-attachment-title {color: #fff;}' + '#question-attachment-description {color: #bdbdbd;}' + '#question-attachment-url {color: #bdbdbd;}' + 'body {font-family: Nunito Sans, sans-serif !important;}';
        document.body.appendChild(dynamicStyle)
    }
}

function applyClassicTheme(primaryColor, secondaryColor, textColor) {
    document.getElementById('formsapp_bg_image').style.display = "none";
    document.body.style.backgroundColor = secondaryColor;
    let welcomeTitleCard = document.getElementById("welcome_title_container");
    welcomeTitleCard.style.backgroundColor = "transparent";
    welcomeTitleCard.querySelector("#welcome_title_text").style.color = "#212121";
    welcomeTitleCard.querySelector("#welcome_description_container").style.color = "#212121";
    document.getElementById("start_survey_button").style.backgroundColor = secondaryColor;
    document.getElementById("start_survey_button").style.border = "1px solid" + primaryColor;
    document.getElementById("start_survey_button").style.color = textColor;
    /*    document.getElementById("view_summary_button").style.backgroundColor = secondaryColor;
        document.getElementById("view_summary_button").style.color = primaryColor;*/
    document.getElementById("add_response_button").style.backgroundColor = secondaryColor;
    document.getElementById("add_response_button").style.color = primaryColor;
    document.getElementById("submission").style.backgroundColor = primaryColor;
    document.getElementById("next_page").style.backgroundColor = primaryColor;
    document.getElementById("violation-alert-cancel").style.backgroundColor = secondaryColor;
    document.getElementById("violation-alert-accept").style.backgroundColor = secondaryColor;
    document.getElementById("fixed_navigation_bottom").style.backgroundColor = secondaryColor;
    document.getElementById("submit_fixed_button").style.color = "#000";
    document.getElementById("total_question_count").style.color = textColor;
    document.querySelector('meta[name="theme-color"]').setAttribute("content", secondaryColor);
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", secondaryColor);
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", secondaryColor);
    document.getElementById("form_title_top_nav").style.color = textColor;
    document.getElementById("form_title_top_nav").style.textShadow = "none";
    document.getElementById("scroll_fab").style.backgroundColor = "#424242";
    document.getElementById("scroll_fab_navigate").style.backgroundColor = "#424242";
    document.getElementById("circle-loader").style.backgroundColor = "#4caf50";
    if (document.getElementById("applied-Theme-CSS") !== null) {
        document.getElementById("applied-Theme-CSS").remove()
    }
    if (document.getElementById("material-UI-theme") !== null) {
        document.getElementById("material-UI-theme").remove()
    }
    applyQuestionCardClassicCSS();
    applyMaterialElementsUIColors("#fff", "#000");

    function applyQuestionCardClassicCSS() {
        let dynamicStyle = document.createElement('style');
        dynamicStyle.type = 'text/css';
        dynamicStyle.id = "applied-Theme-CSS";
        dynamicStyle.innerHTML = '.form-question-card {background-color: #ffffff; box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px 1px !important}' + '.card-content {background-color: transparent !important; padding: 24px 24px 0 24px !important}' + '.card-action { padding: 12px 24px 24px;} ' + '.card-title {color: #000} ' + '.others-text-input {color: #212121; border-bottom-color: #bdbdbd}' + '.answer-text-field {color: #212121; border-bottom-color: #bdbdbd} ' + '.answer-text-field-input {color: #212121; border-bottom-color: #bdbdbd}' + ' #character-counter {color: #212121} ' + '.chip {background-color: #eeeeee; color: #212121}' + '.mdc-radio__outer-circle {border-color: #212121} ' + '.mdc-radio__inner-circle {border-color: #212121 !important}' + '.mdc-checkbox__background {border-color:#9e9e9e}' + '.mdc-checkbox__background:active {border-color: #212121}' + '.mdc-form-field label {color: #212121}' + '.select-selected {color: #212121; border-bottom-color: #bdbdbd}' + ' .select-selected:after {border-top-color: #000}' + '.select-items div {color: #212121; border-color: #f5f5f5}' + '.select-items {background-color:' + secondaryColor + '}' + '.select-selected.select-arrow-active:after {border-bottom-color: #000}' + '.select-search-input {color: #212121; border-color: transparent;}' + '.section-title-container {background-color: transparent}' + '#section-title {color: #212121; text-shadow: none}' + '#section-description {color: #212121; text-shadow: none}' + '.question-attachment-container{background-color: #eeeeee}' + '#question-attachment-title {color: #212121;}' + '#question-attachment-description {color: #757575;}' + '#question-attachment-url {color: #0000ee;}' + '.violation-alert button {color: #212121}' + '#disclaimer-text-container p {color: #212121 !important; text-shadow: none !important}' + 'body {font-family: Nunito Sans, sans-serif !important;}';
        document.body.appendChild(dynamicStyle)
    }
}

function applyVibrantTheme(vibrantColor, DarkVibrantColor) {
    document.getElementById('formsapp_bg_image').style.display = "block";
    document.body.style.backgroundColor = "none";
    let welcomeTitleCard = document.getElementById("welcome_title_container");
    welcomeTitleCard.style.backgroundColor = "rgba(0, 0, 0, 0.3)";
    welcomeTitleCard.querySelector("#welcome_title_text").style.color = "#fff";
    welcomeTitleCard.querySelector("#welcome_description_container").style.color = "#fff";
    document.getElementById("start_survey_button").style.backgroundColor = vibrantColor;
    document.getElementById("start_survey_button").style.border = "1px solid" + vibrantColor;
    document.getElementById("start_survey_button").style.color = "#fff";
    /*    document.getElementById("view_summary_button").style.backgroundColor = vibrantColor;
        document.getElementById("view_summary_button").style.color = "#fff";*/
    document.getElementById("add_response_button").style.backgroundColor = vibrantColor;
    document.getElementById("add_response_button").style.color = "#fff";
    document.getElementById("submission").style.backgroundColor = vibrantColor;
    document.getElementById("next_page").style.backgroundColor = vibrantColor;
    document.getElementById("violation-alert-cancel").style.backgroundColor = DarkVibrantColor;
    document.getElementById("violation-alert-accept").style.backgroundColor = DarkVibrantColor;
    document.getElementById("fixed_navigation_bottom").style.backgroundColor = DarkVibrantColor;
    document.getElementById("submit_fixed_button").style.color = "#fff";
    document.getElementById("total_question_count").style.color = "#212121";
    document.querySelector('meta[name="theme-color"]').setAttribute("content", DarkVibrantColor);
    document.querySelector('meta[name="msapplication-navbutton-color"]').setAttribute("content", DarkVibrantColor);
    document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]').setAttribute("content", DarkVibrantColor);
    document.getElementById("form_title_top_nav").style.color = "#fff";
    document.getElementById("form_title_top_nav").style.textShadow = "1px 1px rgba(0, 0, 0, 0.4)";
    let toastContainer = document.getElementById("toast-container");
    toastContainer.style.backgroundColor = "#000";
    toastContainer.style.borderRadius = "0";
    toastContainer.querySelector("#toast-text").style.color = "#fff";
    document.getElementById("scroll_fab").style.backgroundColor = "#000";
    document.getElementById("scroll_fab_navigate").style.backgroundColor = "#000";
    // document.getElementById("thank_screen_card").style.backgroundColor = DarkVibrantColor;
    document.getElementById("circle-loader").style.backgroundColor = "#4caf50";
    if (document.getElementById("applied-Theme-CSS") !== null) {
        document.getElementById("applied-Theme-CSS").remove()
    }
    if (document.getElementById("material-UI-theme") !== null) {
        document.getElementById("material-UI-theme").remove()
    }
    applyQuestionCardDefaultCSS();
    applyMaterialElementsUIColors(vibrantColor, DarkVibrantColor);

    function applyQuestionCardDefaultCSS() {
        let dynamicStyle = document.createElement('style');
        dynamicStyle.type = 'text/css';
        dynamicStyle.id = "applied-Theme-CSS";
        dynamicStyle.innerHTML = '.form-question-card {background-color: #fff; box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 10px 1px !important}' + '.card-content {background-color: ' + DarkVibrantColor + ' !important; padding: 10px 24px 10px 24px !important}' + '.card-action { padding: 12px 24px 24px 24px;} ' + '.card-title {color: #fff} ' + '.others-text-input {color: #212121; border-bottom-color: #e0e0e0}' + '.answer-text-field {color: #212121; border-bottom-color: #e0e0e0} ' + '.answer-text-field-input {color: #212121; border-bottom-color: #e0e0e0}' + ' #character-counter {color: #616161} ' + '.chip {background-color: #e8e8e8; padding: 4px 12px;}' + '.mdc-radio__outer-circle {border-color:#e0e0e0} ' + '.mdc-radio__outer-circle:active {border-color:' + DarkVibrantColor + ' !important}' + '.mdc-radio__inner-circle {border-color: ' + DarkVibrantColor + '!important}' + '.mdc-checkbox__background {border-color:#9e9e9e}' + '.mdc-checkbox__background:active {border-color:' + DarkVibrantColor + '}' + '.mdc-form-field label {color: #212121}' + '.select-selected {color: #9e9e9e; border-bottom-color: #e0e0e0}' + ' .select-selected:after {border-top-color: #000}' + '.select-items div {color: #212121; border-color: #f5f5f5}' + '.select-items {background-color:#fff }' + '.select-selected.select-arrow-active:after {border-bottom-color: #212121}' + '.select-search-input {color: #212121; border-color: transparent;}' + '.section-title-container {background-color: rgba(0, 0, 0, 0.5)}' + '#section-title {color: #fff; text-shadow: 1px 1px rgba(0, 0, 0, 0.5)}' + '#section-description {color: #fff; text-shadow: 1px 1px rgba(0, 0, 0, 0.4)}' + '.question-attachment-container{background-color: #eeeeee;}' + '#question-attachment-title {color: #212121;}' + '#question-attachment-description {color: #757575;}' + '#question-attachment-url {color: #0000ee;}' + 'body {font-family: Nunito Sans, sans-serif !important;}';
        document.body.appendChild(dynamicStyle)
    }
}

window.onbeforeprint = function () {
    document.getElementById("fixed_navigation_bottom").style.display = "none";
    document.getElementById("disclaimer-text-container").style.display = "none";
    document.getElementById("submission").style.display = "none";
    if (!isClassicThemeEnabled) {
        applyClassicTheme("#000", "#fff", "#212121")
    }
};
window.onafterprint = function () {
    document.getElementById("fixed_navigation_bottom").style.display = "flex";
    document.getElementById("disclaimer-text-container").style.display = "block";
    document.getElementById("submission").style.display = "inline-flex";
    if (!isClassicThemeEnabled) {
        initializeUI()
    }
}
handlePrefilledQuestion();

function handlePrefilledQuestion() {
    let url = new URL(window.location.href);
    let preFilledFormData = JSON.parse(url.searchParams.get("prefilleddata"));
    setPreFilledFormData(preFilledFormData);
}

function setPreFilledFormData(preFilledFormData) {
    if (preFilledFormData && preFilledFormData.length > 0) {
        for (let i = 0; i < preFilledFormData.length; i++) {
            let currentElement = document.getElementById(preFilledFormData[i].qid);
            currentElement.value = preFilledFormData[i].data;
            currentElement.disabled = true;
        }
    }
}

let quizUserInfo = {};
let isQuizTimeUp = false;

function handleQuizTimer() {
    let quizTimerContainer = document.getElementById("fixed-quiz-timer");
    if (formData
        && formData.quiz_data
        && formData.quiz_data.duration
        && formData.quiz_data.duration.is_enabled) {
        quizTimerContainer.style.display = "flex";
        window.onscroll = function (event) {
            if (this.scrollY >= 60) {
                quizTimerContainer.style.position = "fixed";
            } else if (this.scrollY < 60) {
                quizTimerContainer.style.position = "relative";
            }
        }
        startQuizTimer(formData.quiz_data.duration.hours, formData.quiz_data.duration.minutes);
    } else {
        quizTimerContainer.style.display = "none";
    }
}

function startQuizTimer(hours, minutes) {
    let countDownTime = new Date().getTime() + ((hours * 60 * 60 * 1000) + (minutes * 60 * 1000));
    let hourText = document.getElementById("quiz-time-hour");
    let minuteText = document.getElementById("quiz-time-minute");
    let secondText = document.getElementById("quiz-time-second");

    quizTimeInterval = setInterval(function () {
        let now = new Date().getTime();
        let timeDifference = countDownTime - now;
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        hourText.innerText = hours < 10 ? "0" + hours : hours;
        minuteText.innerText = minutes < 10 ? "0" + minutes : minutes;
        secondText.innerText = seconds < 10 ? "0" + seconds : seconds;

        if (timeDifference < 0) {
            clearInterval(quizTimeInterval);
            isQuizTimeUp = true;
            submitForm();
        }
    }, 1000);
}

function showUserInfoPopup() {
    let quizUserInfoContainer = document.getElementById("quiz-user-info-container");
    quizUserInfoContainer.style.display = "flex";
    if (formData
        && formData.quiz_data
        && formData.quiz_data.user_info) {

        let userInfo1 = document.getElementById("user-info-1");
        let userInfo2 = document.getElementById("user-info-2");
        let userInfo3 = document.getElementById("user-info-3");

        let userInfoTitle1 = formData.quiz_data.user_info.user_info_1;
        let userInfoTitle2 = formData.quiz_data.user_info.user_info_2;
        let userInfoTitle3 = formData.quiz_data.user_info.user_info_3;

        if (userInfoTitle1) {
            userInfo1.style.display = "block";
            userInfo1.placeholder = userInfoTitle1;
        }
        if (userInfoTitle2) {
            userInfo2.style.display = "block";
            userInfo2.placeholder = userInfoTitle2;
        }
        if (userInfoTitle3) {
            userInfo3.style.display = "block";
            userInfo3.placeholder = userInfoTitle3;
        }
        document.getElementById("quiz-start").onclick = function () {
            if (userInfoTitle1
                && userInfo1.value.trim().length === 0
                || userInfoTitle2
                && userInfo2.value.trim().length === 0
                || userInfoTitle3
                && userInfo3.value.trim().length === 0) {
                document.getElementById("quiz_user_info_error").style.display = "block";
            } else {
                document.getElementById("quiz_user_info_error").style.display = "none";
                if (userInfo1.value.length > 0) {
                    quizUserInfo.user_info_1 = userInfo1.value;
                }
                if (userInfo2.value.length > 0) {
                    quizUserInfo.user_info_2 = userInfo2.value;
                }
                if (userInfo3.value.length > 0) {
                    quizUserInfo.user_info_3 = userInfo3.value;
                }
                quizUserInfoContainer.style.display = "none";
                startSurveyUI();
                if (!quizTimeInterval) {
                    handleQuizTimer();
                } else if ((isPreviewFormCalledV1 || isPreviewFormCalledOldVersion)) {
                    clearInterval(quizTimeInterval);
                    handleQuizTimer();
                }
            }
        }
    }
    document.getElementById("quiz-cancel").onclick = function () {
        quizUserInfoContainer.style.display = "none";
    }
}

const quizPercentageText = document.getElementById("percentage-circle-percentage");

function setPercentageCircle(element, percentage, increment) {
    if (percentage < 0 || typeof percentage === 'undefined')
        percentage = 0;
    else if (percentage > 100)
        percentage = 100;
    if (typeof increment === 'undefined')
        increment = 0;
    let currentPercentage = (100 * increment) / 360;
    let percentageColor = getPercentageColor(currentPercentage);
    quizPercentageText.innerHTML = (Math.round(currentPercentage) + "%");
    if (increment <= 180) {
        element.style.cssText = 'background-image: linear-gradient(' + (90 + increment) + 'deg, transparent 50%, #eeeeee 50%),linear-gradient(90deg, #eeeeee 50%, transparent 50%)';
    } else {
        element.style.cssText = 'background-image: linear-gradient(' + (increment - 90) + 'deg, transparent 50%, ' + percentageColor + ' 50%),linear-gradient(90deg, #eeeeee 50%, transparent 50%)';
    }
    element.style.backgroundColor = percentageColor;
    if (currentPercentage < percentage) {
        setTimeout(function () {
            setPercentageCircle(element, percentage, ++increment);
        }, 1);
    }
}

function getPercentageColor(percentage) {
    let red, green, blue = 0;
    if (percentage < 50) {
        red = 255;
        green = Math.round(5.1 * percentage);
    } else {
        green = 255;
        red = Math.round(510 - 5.10 * percentage);
    }
    let hexCode = red * 0x10000 + green * 0x100 + blue;
    return '#' + ('000000' + hexCode.toString(16)).slice(-6);
}

function showQuizResult(quizResult) {
    document.getElementById("quiz-score-card-container").style.display = "flex";
    document.getElementById("thank_screen_card_header").style.borderRadius = "12px 12px 0 0";
    document.getElementById("thank_screen_card").style.height = "380px";
    if (!isMobileView) {
        document.getElementById("thank_screen_card").style.width = "370px";
    }

    document.getElementById("score_correct_answer_count").innerText = quizResult.correct;
    document.getElementById("score_total_answer_count").innerText = quizResult.total;

    let scorePercentage = getPercentage(quizResult.correct, quizResult.total);
    document.getElementById("score_count_container").style.borderColor = getPercentageColor(scorePercentage);

    setPercentageCircle(document.getElementById("percentage-circle"), scorePercentage);

    document.getElementById("summary_correct_answer_percentage").innerText = scorePercentage + "%";
    document.getElementById("summary_correct_answer_count").innerText = quizResult.correct;

    document.getElementById("summary_wrong_answer_percentage").innerText = getPercentage(quizResult.wrong, quizResult.total) + "%";
    document.getElementById("summary_wrong_answer_count").innerText = quizResult.wrong;

    document.getElementById("summary_skipped_answer_percentage").innerText = getPercentage(quizResult.skipped, quizResult.total) + "%";
    document.getElementById("summary_skipped_answer_count").innerText = quizResult.skipped;
}

function getPercentage(number, total) {
    if (number
        && Number.isFinite(number)
        && number > -1
        && total
        && Number.isFinite(total)
        && total > 0) {
        let result = (number / total) * 100;
        if (result !== 100
            && result !== 0) {
            return result.toFixed(1);
        }
        return result;
    }
    return 0;
}

function isQuizChoiceQuestionPresent() {
    let questions = formData.pages[0].questions;
    let questionObject;
    for (let i = 0; i < questions.length; i++) {
        questionObject = questions[i];
        if (questionObject.type === QUESTION_TYPE.DROPDOWN_CHOICE
            || questionObject.type === QUESTION_TYPE.MULTIPLE_CHOICE) {
            return true;
        }
    }
    return false;
}

function isValidFile(file) {
    // checking the file size
    if (!file) {
        return false
    }
    const maxSizeInBytes = 5e6; //5MB
    if (file.size > maxSizeInBytes) {
        alert("File Size should not be more than 5MB");
        return false;
    }
    return true;
}

function getFileSizeInReadableFormat(bytes, decimals) {
    if (bytes === 0) return '0 Bytes';
    var k = 1024,
        dm = decimals || 2,
        sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
        i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

function isValidUrl(string) {
    if (string && string.length > 0) {
        let urlPattern = new RegExp("[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)")
        return urlPattern.test(string)
    }
    return false;
}

function setPreviewForWebLink(inputElement) {
    let url = inputElement.value;
    let questionCard = document.getElementById(inputElement.id + '_card');
    const attachmentContainer = questionCard.querySelector("#answer-attachment-container");
    let cardAction = document.getElementById(inputElement.id + '_a')
    if (isValidUrl(url)) {
        attachmentContainer.style.display = "block";
        const urlType = getURLType(url);
        if (urlType === 'image') {
            questionCard.querySelector("#answer-image-container").style.display = "flex";
            questionCard.querySelector("#answer-attachment-web-container").style.display = "none";
            questionCard.querySelector("#answer-image").src = url;
            questionCard.querySelector("#answer-image-container").onclick = function () {
                open(url);
            };
        } else {
            questionCard.querySelector("#answer-image-container").style.display = "none";
            questionCard.querySelector("#answer-attachment-web-container").style.display = "flex";
            questionCard.querySelector("#answer-web-image").style.display = "flex";
            questionCard.querySelector("#answer-web-image").src = '/images/' + getpreviewIconImageName(urlType);
            questionCard.querySelector("#answer-attachment-url").innerText = url;
            questionCard.querySelector("#answer-attachment-web-container").onclick = function () {
                open(url);
            };
        }
        if (document.getElementById(inputElement.id + "_req")) {
            document.getElementById(inputElement.id + "_req").remove();
        }
        if (isRequiredQuestion(inputElement.id)) {
            var requiredTag = getRequiredTagElement(inputElement.id);
            requiredTag.innerHTML = 'Required';
            cardAction.appendChild(requiredTag);
        }
    } else {
        attachmentContainer.style.display = "none";
        if (document.getElementById(inputElement.id + "_req")) {
            document.getElementById(inputElement.id + "_req").remove();
        }
        if (url.length > 0) {
            var requiredTag = getRequiredTagElement(inputElement.id);
            requiredTag.style.backgroundColor = "#f44336";
            requiredTag.style.color = "#fff";
            requiredTag.innerHTML = 'Invalid URL';
            cardAction.appendChild(requiredTag);
        } else {
            if (isRequiredQuestion(inputElement.id)) {
                var requiredTag = getRequiredTagElement(inputElement.id);
                requiredTag.innerHTML = 'Required';
                cardAction.appendChild(requiredTag);
            }
        }
    }
}

const isRequiredQuestion = (questionId) => {
    let allQuestions = formData.pages[0].questions;
    for (let i = 0; i < allQuestions.length; i++) {
        if (allQuestions[i]._id === questionId) {
            if (allQuestions[i].is_required) {
                return true;
            }
        }
    }
    return false;
}

function getURLType(str) {
    if (typeof str !== 'string' || str.length < 1) return false;
    let ext = str.split('.').pop().toLowerCase();
    switch (ext) {
        case 'jpg':
        case 'jpeg':
        case 'gif':
        case 'png':
        case 'webp':
            return 'image';
        case 'mp3' :
        case 'aac' :
        case 'wav' :
        case 'wma' :
            return 'audio';
        case 'doc':
        case 'docx':
            return 'doc'
        case 'xlsx':
            return 'xlsx'
        case 'csv':
            return 'csv'
        case 'pdf' :
            return 'pdf'
        case 'mp4' :
        case 'mov' :
        case 'wmv' :
        case 'flv' :
        case 'avi' :
        case 'webm' :
        case 'mkv' :
            return 'video'
        case 'zip' :
            return 'zip'
        default :
            if (str.startsWith('https://www.youtube.com/')) {
                return 'video'
            } else {
                return 'web'
            }
    }
}

function getpreviewIconImageName(urlType) {
    if (urlType && urlType.length > 0) {
        switch (urlType) {
            case 'audio':
                return 'audio_icon.svg'
            case 'video':
                return 'video_icon.svg'
            case 'doc':
                return 'doc_icon.svg'
            case 'xlsx':
                return 'xlsx_icon.svg'
            case 'csv':
                return 'csv_icon.svg'
            case 'pdf':
                return 'pdf_icon.svg'
            case 'zip' :
                return 'zip_icon.svg'
            default:
                return 'weblink_icon.svg'
        }
    } else {
        return 'weblink_icon.svg'
    }
}

//******************** aws file upload calls *********************
const albumBucketName = "surveyheartmedia";
const bucketRegion = "ap-south-1";
const IdentityPoolId = "ap-south-1:08291bb8-da50-4343-913f-05159a951c0c";
const AWS_FOLDER_NAMES = {
    TEST_IMAGE_FOLDER: "test-images",
    TEST_JSON_FOLDER: "test-jsons",
    PROD_JSON_FOLDER: "users-json",
    PROD_IMAGE_FOLDER: "themes"
};

let folder = AWS_FOLDER_NAMES.TEST_IMAGE_FOLDER;

AWS.config.update({
    region: bucketRegion,
    credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
    })
});

s3 = new AWS.S3({
    apiVersion: "2006-03-01",
    params: {Bucket: albumBucketName}
});
let createRandomID = function () {
    let dt = new Date().getTime();
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}
const randomId = createRandomID()

function uploadFile(file, questionId, successFunction, failureFunction) {
    const fileName = questionId + '_' + randomId + '.' + file.name.split('.').pop();
    const albumPhotosKey = folder + "/";
    const photoKey = albumPhotosKey + fileName;
    // To upload file to AWS server
    const upload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: albumBucketName,
            Key: photoKey,
            Body: file,
            ACL: "public-read"
        }
    });
    const promise = upload.promise();
    promise.then(
        function (data) {
            successFunction(data, fileName);
            // alert("Successfully uploaded photo.");
        },
        function (err) {
            failureFunction();
            console.log(err);
        }
    );
}

function deleteFile(fileName, successFunction) {
    const imageKey = folder + '/' + fileName;
    //To delete object from AWS server.
    s3.deleteObject({Key: imageKey}, (err) => {
        if (err) {
            return alert("There was an error deleting your photo: ", err.message);
        }
        successFunction();
    });
}

function shuffleQuestions(questions) {
    let shuffledQuestions = [];
    let chunkedQuestionListBySection = chunkQuestionsBySection();
    for (let i = 0; i < chunkedQuestionListBySection.length; i++) {
        let currentSection = chunkedQuestionListBySection[i];
        if (currentSection.questions && currentSection.questions.length > 0) {
            chunkedQuestionListBySection[i].questions = shuffleArray(currentSection.questions);
        }
        if (currentSection.sectionContent) {
            shuffledQuestions.push(currentSection.sectionContent);
        }
        for (let j = 0; j < currentSection.questions.length; j++) {
            shuffledQuestions.push(currentSection.questions[j]);
        }
    }
    return shuffledQuestions;

    function chunkQuestionsBySection() {
        let chunkedQuestionList = [];
        let sectionData;
        let sectionQuestions = [];
        for (let i = 0; i < questions.length; i++) {
            let currentQuestion = questions[i];
            if (currentQuestion.type === QUESTION_SECTION) {
                if (sectionData) {
                    sectionData.questions = sectionQuestions;
                } else {
                    sectionData = {
                        questions: sectionQuestions
                    }
                }
                chunkedQuestionList.push(sectionData);
                sectionData = null;
                sectionQuestions = [];
                sectionData = {
                    sectionContent: currentQuestion
                }
            } else {
                sectionQuestions.push(currentQuestion)
            }
            if (i === (questions.length - 1)) {
                if (sectionData) {
                    sectionData.questions = (sectionQuestions.length > 0) ? sectionQuestions : [];
                } else {
                    sectionData = {questions: (sectionQuestions.length > 0) ? sectionQuestions : []};
                }
                chunkedQuestionList.push(sectionData);
            }
        }
        return chunkedQuestionList;
    }

    function shuffleArray(array) {
        let j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }
}
