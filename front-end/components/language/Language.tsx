import { useRouter } from "next/router";

const Language: React.FC = () => {
  const router = useRouter();
  const { locale } = router;

  const handleLanguageChange = (event: { target: { value: string } }) => {
    const newLocale = event.target.value;
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, asPath, { locale: newLocale });
  };
  return (
    <div>
      <select id="language" value={locale} onChange={handleLanguageChange}>
        <option value="en">english</option>
        <option value="nl">dutch</option>
      </select>
    </div>
  );
};
export default Language;
