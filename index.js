function introduction(name) {
    const phrase=`Hi, my name is ${name}.`
    return phrase
}
introduction(Aki)
function introductionWithLanguage(name, language) {
    const phrase1=`Hi, my name is ${name} and I am learning to program in ${language}.`
    return phrase1
}
introduction(Aki,Ember.js)
function introductionWithLanguageOptional(name, language ="JavaScript"){
const phrase2= `Hi, my name is ${name} and I am learning to program in ${language}.`
return phrase2
}
introductionWithLanguageOptional(Gracie)
function introductionWithLanguageOptional(name, language ="JavaScript"){
const phrase3=`Hi, my name is ${name} and I am learning to program in ${language}.`       
return phrase3
}
introductionWithLanguageOptional (Gracie,JavaScript)