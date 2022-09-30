import React, { FC, useContext, useEffect, useLayoutEffect, useRef, useState } from "react";
import style from "./NavBar.module.css";
import logo from "../../../assets/icon/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

interface Props {
	options?: any;
}

const NavBar: FC<Props> = ({ options }) => {
	const [colorBar, setColorBar] = useState("default");
	const [toggle, setToggle] = useState(false);
	const { setUser } = useContext(AuthContext);

	const positionInitial = useRef(0);

	useEffect(() => {
		if (toggle) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "auto";
		}
	}, [toggle]);

	useEffect(() => {
		positionInitial.current = window.scrollY;
	}, []);
	useEffect(() => {
		document.addEventListener("scroll", () => {
			// console.log(window.scrollY);
			let positionY = window.scrollY;

			if (positionY === positionInitial.current) {
				return;
			}

			if (positionY >= positionInitial.current) {
				setColorBar("color");
			} else {
				setColorBar("default");
			}

			positionInitial.current = positionY;

			// Oculta el menu al hacer scroll
			// window.addEventListener("scroll", ()=>setToggle(false))
			// window.scroll(()=>setToggle(false))
			// setToggle(false);
		});

		return () => {};
	}, []);

	const navigate = useNavigate();
	const LogOut = () => {
		localStorage.removeItem("x-access-token");
		setUser(null);
		navigate("/", { replace: true });
	};

	return (
		<nav className={`${style.navbar} ${style[colorBar]}`}>
			<span>
				<NavLink className={style.logo} to="/">
					MY U LIBRARY
				</NavLink>
			</span>
			<ul className={style.tag_ul + (toggle ? " " + style.active : "")}>
				<div className={style.li_container}>
					{options.map((element: any, i: any) => {
						return (
							<li key={i} onClick={() => setToggle(false)}>
								<NavLink to={element.link}>{element.title}</NavLink>
							</li>
						);
					})}
					<div className={style.LogOut_container}>
						<span
							className={style.btnLogOut}
							onClick={() => {
								LogOut();
							}}
						>
							Log out
						</span>
					</div>
				</div>
			</ul>
			{/* <BsList
        color="black"
        size={40}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      /> */}
			<button
				className={style.btn_toggle + (toggle ? " " + style.activeToggleMenu : "")}
				onClick={() => {
					setToggle((prev) => !prev);
				}}
			>
				<div></div>
				<div></div>
				<div></div>
			</button>
		</nav>
	);
};

export default NavBar;
