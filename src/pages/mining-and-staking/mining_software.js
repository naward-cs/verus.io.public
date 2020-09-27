import Menu from '../../components/Menu';
import FooterMenu from '../../components/FooterMenu';
import { miningStakingLinks } from '../../constants/miningStaking';

const MiningSoftware = (props) => {
  const { linuxURL, WinURL, OsURL } = props;
  return (
    <>
      <div className="container grid mt-8 max-w-5xl grid-cols-1 gap-6 md:grid-cols-4">
        <div className="">
          <Menu pathList={miningStakingLinks} href="/mining-and-staking" />
        </div>
        <div className="max-w-5xl p-6 md:col-span-3">
          <h1 className="p-0 m-0 text-4xl font-normal text-bluebutton">
            Mining Software
          </h1>
          <p className="text-xl   leading-normal font-p">
            Get one of the miners to get started. However you mine VRSC, you'll
            need a Verus Coin address, which you can create using the wallet in
            either Lite or Native mode. If you need any help, check our{' '}
            <a href="https://wiki.veruscoin.io/" target="_blank">
              Support Wiki
            </a>
            , or join our{' '}
            <a href="https://discord.gg/VRKMP2S" target="_blank">
              official Discord
            </a>{' '}
            and reach out to the community support channel.
          </p>

          <table className="w-full border-collapse table-fixed font-p">
            <tbody>
              <tr>
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <img src="/images/windows.svg" />
                  <p className="text-xl">nheqminer</p>
                  <p className=" ">Windows, CLI, VerusHash 2.0-2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  {WinURL && (
                    <a href={WinURL} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <img src="/images/macos.svg" />
                  <p className="text-xl ">nheqminer</p>
                  <p className=" ">macOS, CLI, VerusHash 2.0-2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  {OsURL && (
                    <a href={OsURL} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr>
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <img src="/images/linux.svg" />
                  <p className="text-xl ">nheqminer</p>
                  <p className=" ">Linux, CLI, VerusHash 2.0-2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  {linuxURL && (
                    <a href={linuxURL} target="_blank">
                      Download
                    </a>
                  )}
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <p className="text-xl ">CCMiner CPU</p>
                  <p className=" ">x64, ARM, VerusHash 2.0-2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  <a
                    href="https://github.com/monkins1010/ccminer/releases"
                    target="_blank"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr>
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <p className="text-xl ">CCMiner CUDA</p>
                  <p className=" ">Nvidia GPU, VerusHash 2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  <a
                    href="https://github.com/monkins1010/ccminer/releases"
                    target="_blank"
                  >
                    Download
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex flex-row items-center px-4 py-2 space-x-4">
                  <p className="text-xl ">CCMiner OCL</p>
                  <p className=" ">AMD GPU, VerusHash 2.2</p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  <a
                    href="https://github.com/monkins1010/AMDVerusCoin/releases"
                    target="_blank"
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="w-3/4 text-sm   leading-normal font-p">
            <span className="font-bold">System requirements: </span>64bit
            CPU/OS, CPU with AES-NI and AVX instructions. Windows or Linux
            (Ubuntu tested). 4GB Memory.
          </p>
          <h2 className="mt-16 text-2xl font-normal">Dockers</h2>
          <table className="w-full border-collapse table-fixed font-p">
            <tbody>
              <tr>
                <td className="flex flex-row items-baseline px-4 py-2 space-x-4">
                  <img src="/images/linux.svg" />
                  <p className="w-1/4 text-xl">Oink Docker</p>
                  <p className="w-3/4  ">
                    Dockers running nheqminer or ccminer. OS independent VM,
                    internal Linux
                  </p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  <a href="https://hub.docker.com/r/oink70" target="_blank">
                    Download
                  </a>
                </td>
              </tr>
              <tr className="bg-gray-100">
                <td className="flex flex-row items-baseline px-4 py-2 space-x-4">
                  <img src="/images/linux.svg" />
                  <p className="w-1/4 text-xl">0x03 Docker</p>
                  <p className="w-3/4  ">
                    Dockers running nheqminer or ccminer. OS independent VM,
                    internal Linux
                  </p>
                </td>
                <td className="w-1/6 px-4 py-2 text-center ">
                  <a
                    href="https://github.com/BloodyNora/Docker"
                    target="_blank"
                  >
                    Download
                  </a>
                </td>
              </tr>
            </tbody>
          </table>

          <p className="w-3/4 text-sm   leading-normal font-p">
            <span className="font-bold">System requirements: </span>64bit
            CPU/OS, CPU with AES-NI and AVX instructions. Windows or Linux
            (Ubuntu tested). 4GB Memory.
          </p>

          <p className="p-8 mt-16 mb-32 text-sm   leading-normal bg-gray-100 font-p">
            All software is provided "as is", without warranty of any kind,
            express or implied, including but not limited to the warranties of
            merchantability, fitness for a particular purpose and
            noninfringement. In no event shall the authors or copyright holders
            be liable for any claim, damages or other liability, whether in an
            action of contract, tort or otherwise, arising from, out of or in
            connection with the software or the use or other dealings in the
            software.
          </p>
        </div>
      </div>
      <FooterMenu
        hrefLocation="/mining-and-staking"
        pathList={miningStakingLinks}
      />
    </>
  );
};

export default MiningSoftware;

export async function getServerSideProps(context) {
  let result = await fetch(
    'https://api.github.com/repos/VerusCoin/nheqminer/releases/latest'
  );
  let latestNheqminer = await result.json();
  let linuxURL,
    WinURL,
    OsURL = '';
  latestNheqminer.assets.map((asset) => {
    if (asset.name.match('Linux')) {
      linuxURL = asset.browser_download_url;
    }
    if (asset.name.match('MacOS')) {
      OsURL = asset.browser_download_url;
    }
    if (asset.name.match('Windows')) {
      WinURL = asset.browser_download_url;
    }
  });

  return {
    props: { linuxURL, WinURL, OsURL },
  };
}
