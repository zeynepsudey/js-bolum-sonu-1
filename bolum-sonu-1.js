const happy = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-grin" viewBox="0 0 16 16">
  <path d="M12.946 11.398A6.002 6.002 0 0 1 2.108 9.14c-.114-.595.426-1.068 1.028-.997C4.405 8.289 6.48 8.5 8 8.5s3.595-.21 4.864-.358c.602-.07 1.142.402 1.028.998a5.95 5.95 0 0 1-.946 2.258m-.078-2.25C11.588 9.295 9.539 9.5 8 9.5s-3.589-.205-4.868-.352c.11.468.286.91.517 1.317A37 37 0 0 0 8 10.75a37 37 0 0 0 4.351-.285c.231-.407.407-.85.517-1.317m-1.36 2.416c-1.02.1-2.255.186-3.508.186s-2.488-.086-3.507-.186A5 5 0 0 0 8 13a5 5 0 0 0 3.507-1.436ZM6.488 7c.114-.294.179-.636.179-1 0-1.105-.597-2-1.334-2C4.597 4 4 4.895 4 6c0 .364.065.706.178 1 .23-.598.662-1 1.155-1 .494 0 .925.402 1.155 1M12 6c0 .364-.065.706-.178 1-.23-.598-.662-1-1.155-1-.494 0-.925.402-1.155 1a2.8 2.8 0 0 1-.179-1c0-1.105.597-2 1.334-2C11.403 4 12 4.895 12 6"/>
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14"/>
</svg>
`
const sad = `
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.5 3.5 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.5 4.5 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5m4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5"/>
</svg>
`

let grade = prompt("Notunuzu giriniz.")
let textInfo;
let info = document.querySelector("#info")

    info.classList.add(`text-primary`)
if (grade >= 90 && grade <= 100) {
    textInfo = `${happy} AA`
} else if (grade >= 85 && grade <= 89) {
    textInfo = `${happy} BA`
} else if (grade >= 80 && grade <= 84) {
    textInfo = `${happy} BB`
} else if (grade >= 75 && grade <= 79) {
    textInfo = `${happy} CB`
} else if (grade >= 70 && grade <= 74) {
    textInfo = `${happy} CC`
} else if (grade >= 65 && grade <= 69) {
    textInfo = `${happy} DC`
} else if (grade >= 60 && grade <= 64) {
    textInfo = `${happy} DD`
} else if (grade >= 50 && grade <= 59) {
    textInfo = `${happy} FD`
} else if (grade >= 0 && grade <= 49) {
    textInfo = `${sad} FF`
    info.classList.remove(`text-primary`)
    info.classList.add(`text-danger`)

} if (textInfo !== undefined) {
    info.innerHTML = `Notunuz : ${grade} -- Harf Notunuz : ${textInfo}`;
} else {
    info.innerHTML = "Hata! 0-100 arası bir not giriniz.";
}