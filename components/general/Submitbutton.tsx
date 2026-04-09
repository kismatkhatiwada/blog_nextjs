"use client"
import { useFormStatus } from "react-dom"
export default function Submitbutton(){
    const {pending}=useFormStatus();
    return(
        <button className="w-fit btn btn-neutral" type="submit" disabled={pending}>{pending?"Submitting":"Submit"}</button>
    )
}