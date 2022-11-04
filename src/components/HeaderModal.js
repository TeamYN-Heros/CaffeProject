import "../CSS/headerModal.css"

const HeaderModal = () => {

    return (
        <div className={"headerModalPosition"}>
            <div className={"headerModalBox"}>
                <ul className={"headerModalUL"}>
                    <li className={"headerModalLI"}>로그인</li> {/*<Link>로 감싸주기*/}
                    <li className={"headerModalLI"}>장바구니</li>
                    <li className={"headerModalLI"}>????</li>
                    <li className={"headerModalLI"}>????</li>
                    <li className={"headerModalLI"}>????</li>
                </ul>
            </div>
        </div>

    );
}

export default HeaderModal;