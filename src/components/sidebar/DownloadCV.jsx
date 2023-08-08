import Button from '../ui/Button';

function DownloadCV() {
  return (
    <Button
      type="download"
      fileName="Yash_Srivastava.pdf"
      link="https://cloud.appwrite.io/v1/storage/buckets/64c67484aeff59511269/files/64c675e546ed8eb9c6e3/view?project=64c6746e6e538b52e163&mode=admin"
    >
      <div className="flex items-center gap-2">
        <svg style={{ fill: '#fff' }} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
        </svg>
        <span className="text-lg capitalize">Download CV</span>
      </div>
    </Button>
  );
}

export default DownloadCV;
