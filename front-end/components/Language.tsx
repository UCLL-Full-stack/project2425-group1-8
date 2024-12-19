import { useRouter } from "next/router"

const Language: React.FC =()=>{
    const router= useRouter();
    const { locale,pathname, asPath, query } =router;

    const handleLanguageChange =(event: {target:{value:string} }) =>{
        const newLocale =event.target.value;
        const {pathname, asPath ,query }=router;
        router.push({pathname, query}, asPath,{ locale: newLocale});
    };


    return(
        <div className="ml-2">
            <label htmlFor="language" className="text-white">
            </label>
            <select 
            className="ml-2 p-1 py-2 "
            id="language"
            value={locale}
            onChange={handleLanguageChange}>
                <option value="en">English</option>
                <option value="nl">Dutch</option>
            </select>
        </div>
    );
};

export default Language;