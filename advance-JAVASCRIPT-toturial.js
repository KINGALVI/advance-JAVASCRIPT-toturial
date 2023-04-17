// ১। JavaScript এ যদি আমারা কোন HTML ট্যাগ এর অ্যাক্সেস পেতে চাই তাহলে  সে ক্ষেত্রে যা ব্যবহার করতে হবে ।
const tagCollection = document.getElementsByTagName('body');
console.log(tagCollection);

for (const li of tagCollection) {
console.log(li);
}