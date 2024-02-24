const questions = [
    {
        question:"राजनीति विज्ञान को किस विचारक ने पूर्ण या सर्वोच्च विज्ञान माना है ?",
        answers: [
            { text: "प्लेटो", correct: false},
            { text: " गांधी", correct: false},
            { text: "अरस्तू", correct: true},
            { text: "बर्क", correct: false},
        ] 
    },

    {
        question:"राजनीति विज्ञान को विज्ञान किस कारण कहा जाता है?",
        answers: [
            { text: "सिद्धांतों की मतैकयता", correct: false},
            { text: "निर्णयो की सुनिश्चिता", correct: false},
            { text: "परिणामों की भविष्यवाणी", correct: false},
            { text: "क्रमबद्ध अध्ययन", correct: true},
        ] 
    },

    {
        question:"'राजनीति विज्ञान राज्य से आरंभ होता है एवं राज्य पर समाप्त होता है' यह परिभाषा किसने दी है ?",
        answers: [
            { text: "गार्नर द्वारा", correct: true},
            { text: "बर्क द्वारा", correct: false},
            { text: "सिले द्वारा", correct: false},
            { text: "लिकॉक दवारा", correct: false},
        ] 
    },

    {
        question:"राजनीति विज्ञान का परंपरागत दृष्टिकोण मुख्यतः केंद्रीय था?",
        answers: [
            { text: "सरकार व राज्य के अध्ययन पर", correct: true},
            { text: "शक्ति हुए वैधता के अध्ययन प", correct: false},
            { text: "राजनीतिक व्यवस्था के अध्ययन पर", correct: false},
            { text: "राजनीतिक प्रक्रियाओं के अध्ययन पर", correct: false},
        ] 
    },

    {
        question:"राजनीति विज्ञान सरकार से संबंधित विद्या है । यह परिभाषा किसने दी है?",
        answers: [
            { text: "गिलक्रिस्ट ने", correct: false},
            { text: "लीकोक ने", correct:true},
            { text: "सिले ने", correct: false},
            { text: "इनमें से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"परंपरागत राजनीति विज्ञान के अध्ययन क्षेत्र में क्या सम्मिलित नहीं है?",
        answers: [
            { text: "राज्य का अध्ययन", correct: false},
            { text: "सरकार का अध्ययन", correct: false},
            { text: "राजनीतिक दल व दबाव समूह का अध्ययन", correct: false},
            { text: "सार्वजनिक समस्याओं के संदर्भ में संघर्ष व सहमति का अध्ययन", correct: true},
        ] 
    },

    {
        question:"राजनीति विज्ञान को निम्न में से कौन सा तर्क विज्ञान न होने की पुष्टि करता है?",
        answers: [
            { text: "राजनीति विज्ञान अपने अध्ययन की विषय वस्तु का क्रमबद्ध व्यवस्थित ज्ञान प्रस्तुत करती है", correct: false},
            { text: "राजनीति विज्ञान कार्य कारण में पारस्परिक संबंध को व्यक्त करती है", correct: true},
            { text: "राजनीति विज्ञान में सर्व मान्य सिद्धांतों का भाव है", correct: false},
            { text: "राजनीति विज्ञान में पर्यवेक्षण वह प्रयोग संभव है", correct: false},
        ] 
    },

    {
        question:"किस भाषा से पॉलिटिक्स शब्द की उत्पत्ति हुई है?",
        answers: [
            { text: "अरबी", correct: false},
            { text: "संस्कृत", correct: false},
            { text: "ग्रीक", correct: true},
            { text: "फारसी", correct: false},
        ] 
    },

    {
        question:"अमेरिकन पॉलीटिकल साइंस एसोसिएशन के स्थापना कब हुई?",
        answers: [
            { text: "1903", correct: true},
            { text: "1905", correct: false},
            { text: "1910", correct: false},
            { text: "1911", correct: false},
        ] 
    },

    {
        question:"हर्बट साइमन राजनीतिक विज्ञान को कौन सा विज्ञान मानते हैं ?",
        answers: [
            { text: "नीति विज्ञान", correct: false},
            { text: "निर्णय विज्ञान", correct: true},
            { text: "समाज विज्ञान", correct: false},
            { text: "परंपरागत विज्ञान", correct: false},
        ] 
    },

    {
        question:"जिस प्रकार हम सौंदर्यशास्त्र को विज्ञान की संज्ञा नहीं दे सकते उसी प्रकार राजनीति शास्त्र को भी विज्ञान नहीं कहा जा सकता है। यह कथन किसका है?",
        answers: [
            { text: "कामटे", correct: false},
            { text: "बर्क", correct: true},
            { text: "मेटलैंड", correct: false},
            { text: "गिलक्राइस्ट", correct: false},
        ] 
    },

    {
        question:"परंपरागत राजनीतिक सिद्धांत का क्या उपनाम नहीं है?",
        answers: [
            { text: "क्लासिकी", correct: false},
            { text: "आदर्शी", correct: false},
            { text: "मानकात्मा", correct: false},
            { text: "संगठनात्मक प्रकार्यात्मक उपागम", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में कौन सा राजनीतिक विज्ञान में अध्ययन का परंपरागत उपागम है?",
        answers: [
            { text: "व्यवहारवादी उपागम", correct: false},
            { text: "व्यवस्था उपागम", correct: false},
            { text: "संगठनात्मक प्रकार्यात्मक उपागम", correct: false},
            { text: "संगठनात्मक उपागम", correct: true},
        ] 
    },

    {
        question:"राज्य की उत्पत्ति से संबंधित अनेक सिद्धांत है निम्न में से कौन सा सिद्धांत अधिक बुद्धि संगत एवं वैज्ञानिक है ?",
        answers: [
            { text: "ऐतिहासिक अथवा विकासवादी सिद्धांत", correct: true},
            { text: "देविक सिद्धांत", correct: false},
            { text: "शक्ति का सिद्धांत", correct: false},
            { text: "उपरोक्त में से कोई नहीं", correct: false},
        ] 
    },

    {
        question:"निम्न में से कौन सा कथन सही नहीं है ?",
        answers: [
            { text: "राजनीति सिद्धांत आलोचना का शास्त्र है -दांतेजमीनों", correct: false},
            { text: "राजनीतिक सिद्धांत की मृत्यु की घोषणा करता है -रॉबर्ट डहल", correct: false},
            { text: "राजनीतिक सिद्धांत के पतन की विवेचना की -डेविड ईस्टन 'अल्फ्रेड कोबान", correct: false},
            { text: "राज्य का आधार शक्ति नही इच्छा है -हरबर्ट स्पेंसर", correct:true},
        ] 
    },

    {
        question:"आधुनिक राजनीति शास्त्र को आधुनिक क्यों माना जाता है ?",
        answers: [
            { text: "क्योंकि यह राजनीति का वैज्ञानिक अध्ययन करता है", correct: false},
            { text: "क्योंकि औपचारिक राजनीतिक प्रक्रिया का अध्ययन करता है", correct: false},
            { text: "क्योंकि राजनीति कोई विशेष संदर्भ में मानव व्यवहार के रूप में वर्णन करता है", correct: false},
            { text: "उपरोक्त सभी", correct: true},
        ] 
    },

    {
        question:"मनुष्य एक सामाजिक और राजनीतिक प्राणी है यह किसने कहा?",
        answers: [
            { text: "प्लेटो", correct: false},
            { text: "अरस्तू", correct: false},
            { text: "एक्वीनास", correct: false},
            { text: "A and B both", correct: true},
        ] 
    },

    {
        question:"राजनीति विज्ञान में आधुनिक दृष्टिकोण के समर्थको का समूह है।",
        answers: [
            { text: "लॉसवेल,प्लूटो,रोबर्ट डहल", correct: false},
            { text: "केटलिन,लॉसवेल,रोबर्ट डहल", correct: true},
            { text: "अरस्तू,प्लूटो,केटलिन", correct: false},
            { text: " बर्क, रोबर्ट डहल, लॉसवेल", correct: false},
        ] 
    },

    {
        question:"किसी समस्या को संघर्षपूर्ण बनाने वाली अथवा उसका समाधान खोजने वाली सभी गतिविधियां राजनीति है।परिभाषा किसने दी है",
        answers: [
            { text: "रोबर्ट डहल एंव फ्रामेंन ने", correct: false},
            { text: "बर्क एंव गार्नर ने", correct: false},
            { text: "मेरान व बेनफील्ड ने", correct:true},
            { text: "केटलिन एंव गार्नर ने", correct: false},
        ] 
    },

    {
        question:"आधुनिक अर्थों में राज्य शब्द का प्रयोग सर्वप्रथम किस विचारक ने किया?",
        answers: [
            { text: "अरस्तु", correct: false},
            { text: "मैक्यावली", correct: true},
            { text: "बोदा", correct: false},
            { text: "हॉब्स", correct: false},
        ] 
    },

    {
        question:"राजनीति विज्ञान किस प्रकार का विज्ञान है?",
        answers: [
            { text: "प्राकृतिक विज्ञान", correct: false},
            { text: "निरपेक्ष विज्ञान", correct: false},
            { text: "सामाजिक विज्ञान", correct: true},
            { text: "प्रमाणिक विज्ञान", correct: false},
        ] 
    },

    {
        question:"कैटलिन के अनुसार राजनीति विज्ञान है?",
        answers: [
            { text: "कला", correct: false},
            { text: "दर्शन", correct: false},
            { text: "विज्ञान", correct: false},
            { text: "उपयुक्त सभी", correct: true},
        ] 
    },

    {
        question:"राजनीति विज्ञान राज्य का विज्ञान है कथन किसका है?",
        answers: [
            { text: "गेटेल", correct: true},
            { text: "गार्नर", correct: false},
            { text: "सीले", correct: false},
            { text: "लॉर्ड ऐक्टन", correct: false},
        ] 
    },

    {
        question:"मनुष्य स्वभाव से ही एक राजनीतिक प्राणी है और वह जो समाज अथवा राज्य के बिना रहता है या तो देवता है अथवा पशु। यह कथन किसका है?",
        answers: [
            { text: "अरस्तू", correct:true},
            { text: "प्लेटो", correct: false},
            { text: "गांधी", correct: false},
            { text: "सिले", correct: false},
        ] 
    },

    {
        question:"प्राचीन भारतीय राजनीतिक चिंतन में राजनीति के लिए निम्नांकित में से किस शब्द का प्रयोग नही किया गया",
        answers: [
            { text: "राजनीति शास्त्र", correct: true},
            { text: "राज शास्त्र", correct: false},
            { text: "नीतिशास्त्र", correct: false},
            { text: "अर्थशास्त्र", correct: false},
        ] 
    },

    {
        question:"राज्य का सप्तांग सिद्धांत निम्नांकित में से किस्से संबंधित है:",
        answers: [
            { text: "मनु", correct: false},
            { text: "कौटिल्य", correct: true},
            { text: "भीष्म", correct: false},
            { text: "कामन्दक", correct: false},
        ] 
    },

    {
        question:"आधुनिक राजनीतिक चिन्तक की शुरुआत होती है:",
        answers: [
            { text: "स्वामी विवेकानंद", correct: true},
            { text: "महात्मा गांधी", correct: false},
            { text: "अरस्तु", correct: false},
            { text: "गौतम बुद्ध", correct: false},
        ] 
    },

    {
        question:"प्राचीन भारतीय राजनीतिक चिंतन का मुख्य स्रोत है:",
        answers: [
            { text: "स्मृतियां", correct: false},
            { text: "वेद", correct: false},
            { text: "महाभारत", correct: false},
            { text: "अर्थशास्त्र", correct: true},
        ] 
    },

    {
        question:"सामाजिक न्याय की अवधारणा निम्नांकित में से किस प्रकार के राज्य के अनुकूल है:",
        answers: [
            { text: "राजतंत्रात्मक राज्य", correct: false},
            { text: "लोक-कल्याणकारी राज्य", correct: true},
            { text: "समाजवादी राज्य", correct: false},
            { text: "संघीय राज्य", correct: false},
        ] 
    },

    {
        question:"भारतीय संविधान के किस अनुच्छेद/अनुच्छेदों में शोषण के विरुद्ध अधिकार का प्रावधान है:",
        answers: [
            { text: "अनु. 21", correct: false},
            { text: "अनु. 23", correct: true},
            { text: "अनु. 25", correct: false},
            { text: "अनु. 27", correct: false},
        ] 
    },

    {
        question:"संविधान का कौन सा अनुच्छेद राज्य को एक ऐसी सामाजिक व्यवस्था की स्थापना हेतु निर्देशित करता है जिसमे जीवन के सभी क्षेत्रों में न्याय की स्थापना हो सके:",
        answers: [
            { text: "अनु. 37", correct: false},
            { text: "अनु. 38", correct: true},
            { text: "अनु. 39", correct: false},
            { text: "अनु. 40", correct: false},
        ] 
    },

    {
        question:"राजनीति विज्ञान के आरंभ और अंत राज्य है। यह कथन किसका है:",
        answers: [
            { text: " गार्नर", correct: true},
            { text: "गेटिल", correct: false},
            { text: "लास्की", correct: false},
            { text: "ब्लंशली", correct: false},
        ] 
    },

    {
        question:"'राज्य' शब्द का प्रयोग सबसे पहले किस विचारक ने किया:",
        answers: [
            { text: "प्लेटो", correct: true},
            { text: "अरस्तु", correct: false},
            { text: " मेक्यावेली", correct: false},
            { text: " हॉब्स", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से किस विचारधारा ने राज्य को शोषण का एक साधन माना है:",
        answers: [
            { text: "आदर्शवादी", correct: false},
            { text: "व्यक्तिवादी", correct: false},
            { text: "अराजकतावादी", correct: false},
            { text: "मार्क्सवादी", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में से क्या राज्य का ऐच्छिक कार्य नही है",
        answers: [
            { text: "विधि और व्यवस्था की स्थापना", correct: true},
            { text: "स्वास्थ्य सेवाओं का प्रबंध", correct: false},
            { text: "शिक्षा का प्रबंध", correct: false},
            { text: "सामाजिक कल्याण", correct: false},
        ] 
    },

    {
        question:"राज्य का अनिवार्य कार्य",
        answers: [
            { text: "सामाजिक सुधार", correct: false},
            { text: "कृषि की उन्नति", correct: false},
            { text: "बाह्य आक्रमण से रक्षा", correct: true},
            { text: "आर्थिक व्यय", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन-सा राज्य का सर्वाधिक महत्वपूर्ण तत्व है",
        answers: [
            { text: "निश्चित भू-भाग", correct: false},
            { text: "जनसंख्या", correct: false},
            { text: "सरकार", correct: false},
            { text: "सार्वभौमिकता (संप्रभुता)", correct: true},
        ] 
    },

    {
        question:"निम्नांकित में कौन से कर्तव्य राज्य के लिए बाध्यकारी होते है?",
        answers: [
            { text: " नैतिक कर्तव्य", correct: false},
            { text: "सामाजिक कर्तव्य", correct: false},
            { text: "राजनीतिक कर्तव्य", correct: false},
            { text: "वैधानिक कर्तव्य", correct: true},
        ] 
    },

    {
        question:"किस विचारक के अनुसार नागरिक वह है जो राज्य के कार्यों में भाग लेता है?",
        answers: [
            { text: "प्लेटो", correct: false},
            { text: "बोदा", correct: false},
            { text: "अरस्तु", correct: true},
            { text: "जे.एस. मिल", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से किस आधार पर नागरिकता नही प्राप्त होती",
        answers: [
            { text: "जन्म द्वारा", correct: false},
            { text: "व्यवसाय द्वारा", correct: true},
            { text: "वंश द्वारा", correct: false},
            { text: "विवाह द्वारा", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से एक नागरिक अधिकार नही है",
        answers: [
            { text: "इच्छानुसार आचरण करने का अधिकार", correct: true},
            { text: "संपत्ति का अधिकार", correct: false},
            { text: "शिक्षा का अधिकार", correct: false},
            { text: "सभा करने का अधिकार", correct: false},
        ] 
    },

    {
        question:"निम्नांकित में से कौन से कर्तव्य राज्य के लिए बाध्यकारी होते है",
        answers: [
            { text: "नैतिक कर्तव्य", correct: false},
            { text: "सामाजिक कर्तव्य", correct: false},
            { text: "राजनीतिक कर्तव्य", correct: false},
            { text: " वैधानिक कर्तव्य", correct: true},
        ] 
    },

    {
        question:"नागरिकता राजनीतिक बंधन का सूत्र है और यह इसकी प्रकृति पर निर्भर करता है कि वह कितना मजबूत है। यह किसने कहा ?",
        answers: [
            { text: "जे.एस. बारबेलर", correct: true},
            { text: "ब्लैकविल इनसाइक्लोपीडिया", correct: false},
            { text: "टी.एच. मार्शल", correct: false},
            { text: "रोबर्ट हुक", correct: false},
        ] 
    },

    {
        question:"संविधान उस पद्धति का प्रतीक होता है जो किसी राज्य द्वारा अपने लिए अपनाई जाती है। यह कथन किसका है",
        answers: [
            { text: "जेलिनेक", correct: true},
            { text: "अरस्तु", correct: false},
            { text: "डाइसी", correct: false},
            { text: "हरमन फाइनर", correct: false},
        ] 
    },

    {
        question:"विकसित संविधान में निम्नांकितके से किसका मुख्य योगदान होता है:",
        answers: [
            { text: "विधियाँ", correct: false},
            { text: "प्रथाओं", correct: true},
            { text: "व्ययहार के नियमों", correct: false},
            { text: "ऐतिहासिक नियमों", correct: false},
        ] 
    },

    {
        question:"लचीले संविधान का दोष है",
        answers: [
            { text: "परिवर्तनशीलता", correct: true},
            { text: "क्रांति का डर", correct: false},
            { text: "सम्मान का पात्र", correct: false},
            { text: "अनिश्चित तथा अस्पष्ट", correct: false},
        ] 
    },

    {
        question:"भारत का संविधान है",
        answers: [
            { text: "विकसित", correct: false},
            { text: "कठोर", correct: false},
            { text: "अलिखित", correct: false},
            { text: "लिखित एवं निर्मित", correct: true},
        ] 
    },

    {
        question:"किस प्रकार के संविधान में  क्रांति की संभावना अधिक होती है",
        answers: [
            { text: "लचीला संविधान", correct: false},
            { text: "विकसित संविधान", correct: false},
            { text: "अलिखित संविधान", correct: false},
            { text: "कठोर संविधान", correct: true},
        ] 
    },

    {
        question:"भारत के संविधान के किस अनुच्छेद के अंतर्गत ‘निजता का अधिकार’ संरक्षित है?",
        answers: [
            { text: "अनुच्छेद 15", correct: false},
            { text: "अनुच्छेद 19", correct: false},
            { text: "अनुच्छेद 21", correct: true},
            { text: "अनुच्छेद 29", correct: false},
        ] 
    },

    {
        question:"कानून को लागू करने के मामले में कोई विधान, जो किसी कार्यपालक अथवा प्रशासनिक प्राधिकारी को अनिर्देशित एवं अनियंत्रित विवेकाधिकार देता है, भारत के संविधान के निम्नलिखित अनुच्छेदों में से किसका उल्लंघन करता है?",
        answers: [
            { text: "अनुच्छेद 14", correct: true},
            { text: "अनुच्छेद 28", correct: false},
            { text: "अनुच्छेद 32", correct: false},
            { text: "अनुच्छेद 44", correct: false},
        ] 
    },





];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
} 

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "start quiz again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})

startQuiz(); 