var check = [
    "MD4",
    "MD5",
    "SHA1",
    "SHA256",
    "SHA512"
]

class mesHash {

    static hash() {

        let msg = document.getElementById("msg").value;

        let checkTrue = [];

        check.forEach(x => {
            let check = document.getElementById(x).checked;
            if (check) {
                checkTrue.push(x);
            }
        });

        let value = ""

        checkTrue.forEach(x => {
            value += `<li class="list-group-item"> ${x} : ${mesHash.signer(msg, x)}</li>`
        });

        document.getElementById("list").innerHTML = value;

    }

    static signer = function (message, hash) {

        switch (hash) {
            case "MD4":
                return calcMD4(message);
            case "MD5":
                return calcMD5(message);
            case "SHA1":
                return calcSHA1(message);
            case "SHA256":
                return sha256(message);
            case "SHA512":
                return sha512(message);
        }
    }
}

function radio() {

    let radio = ""
    check.forEach(x => {
        radio += `
        <div>
            <div>
                <input type="checkbox" id="${x}">
                <label for="flexCheckDefault">
                    ${x}
                </label>
            </div>
        </div>
        `
        document.getElementById("row").innerHTML = radio;
    });

}