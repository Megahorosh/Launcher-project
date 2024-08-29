
export function CheckEmail(email)
{
	const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
	return re.test(String(email).toLowerCase())
}


// заменяет три строки отображения ошибки
export function error_text_appearence(text_obj, text_value, visibility){
	text_obj.text = text_value; // Set Text to "text_value"
	text_obj.isVisible = visibility; // Set Visible (true or false)
	text_obj.restartFade; // Fade: restart fade
}
