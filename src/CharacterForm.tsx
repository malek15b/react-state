import {useState} from "react";

type DataFormProps = {
    setName: (name: string) => void
}

export default function CharacterForm() {

    const [name, setName] = useState<string>("")
    const [image, setImage] = useState<string>("")

    return (
        <>
            <form>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Name: </label>
                    <input
                        onChange={(e) =>
                            setName(e.target.value)}
                        type="text" id="default-input"
                        placeholder="Name Eingeben"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
                <div className="mb-6">
                    <label htmlFor="default-input" className="block mb-2 text-sm font-medium
                text-gray-900">
                        Image: </label>
                    <input
                        onChange={(e) =>
                            setImage(e.target.value)}
                        type="text" id="default-input"
                        placeholder="Bild URL Eingeben"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
                    focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                </div>
            </form>
        </>
    )
}