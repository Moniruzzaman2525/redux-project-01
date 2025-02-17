import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

export default function Navbar() {
    return (
        <nav className="max-w-7 mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center gap-3">
                 <span className="font-bold ml-2">Task</span>Master
            </div>
            <Link to='/'>Task</Link>
            <Link to='/users'>Users</Link>
            <div>
                <ModeToggle />
            </div>
        </nav>
    )
}