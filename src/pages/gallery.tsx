import {useRouter} from 'next/router';
import {Toaster} from 'react-hot-toast';
import {useEffect, useState} from 'react';
import {useUser} from '../components/user';
import {formatBytes} from '../utils/Format';
import {sendToast} from '../utils/sendToast';
import Nav from '../components/navigators/navbar';
import Button from '../components/interactive/button';
import {ClipboardIcon, TrashIcon} from '@heroicons/react/outline';

export default function Gallery() {
  const router = useRouter();
  const {user} = useUser();
  const [pages] = useState(() => {
    if (!user) return [];

    const imgs = user.uploads;
    const returnPages = [];
    const pageCount = Math.ceil(imgs.length / 8);

    for (let i = 0; i !== pageCount; i++) {
      returnPages.push({
        page: i,
        imgs: imgs.slice(i == 1 ? 8 : i * 8, (i + 1) * 8),
      });
    }

    return returnPages;
  });
  const [currentPage, setCurrentPage] = useState(pages[0]);

  useEffect(() => {
    if (!user) {
      router.push('/');
    } else if (!user.discordId) {
      router.push('/discord');
    }
  }, [router, user]);

  return user && user.discordId ? (
    <>
      <Toaster />

      <Nav page="gallery" />
      <div className="text-white">
        <div className="px-6">
          <div className="m-6 ml-5">
            <span className="text-5xl font-bold text-snow-300">Gallery</span>
          </div>
        </div>
        {user.uploads.length ? (
          <>
            <div className="grid grid-cols-1 gap-8 px-12 pb-10 md:grid-cols-3 lg:grid-cols-4">
              {currentPage.imgs.map((image) => (
                <>
                  <div
                    key={image.cdnName}
                    className="rounded bg-polar-300 pb-4 shadow"
                  >
                    {image.cdnName.endsWith('mp4') ||
                    image.cdnName.endsWith('mov') ||
                    image.cdnName.endsWith('webm') ? (
                      <video
                        src={`https://s3.us-east-2.wasabisys.com/kythi/${image.uploaderId}/${image.cdnName}`}
                        className="h-52 w-full rounded-t-lg object-cover"
                        controls
                      />
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={`https://s3.us-east-2.wasabisys.com/kythi/${image.uploaderId}/${image.cdnName}`}
                        alt="gallery image"
                        className="h-52 w-full rounded-t-lg object-cover"
                      />
                    )}
                    <div className="divide-y-2 divide-blue-300">
                      <div />
                      <div />
                    </div>
                    <div className="mt-4 flex flex-col items-center justify-center">
                      <span className="text-xl font-semibold">
                        {image.cdnName}
                      </span>
                      <span className="font-bold">
                        File Size -&nbsp;
                        <span className="font-normal">
                          {formatBytes(image.size)}
                        </span>
                      </span>
                      <span className="text-center font-bold">
                        Upload Date -&nbsp;
                        <span className="font-normal">
                          {new Date(image.uploadedAt).toLocaleString()}
                        </span>
                      </span>
                      <div className="mt-3 space-x-2">
                        <Button
                          onClick={() =>
                            sendToast(
                              'Successfully copied Image url to clipboard!',
                              'success'
                            )
                          }
                        >
                          <ClipboardIcon className="h-6 w-6" />
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() =>
                            sendToast('Successfully deleted image!', 'success')
                          }
                        >
                          <TrashIcon className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
            <div className="mx-12 mb-4 flex flex-wrap items-center justify-center gap-2 rounded-lg bg-polar-200 p-2">
              <Button
                cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200"
                onClick={() => {
                  setCurrentPage(
                    (currentPage) =>
                      pages.find(
                        (page) => page.page === currentPage.page - 1
                      ) ?? currentPage
                  );
                }}
              >
                {'<'}
              </Button>
              {pages.map((page, index) => {
                return (
                  <Button
                    variant="none"
                    key={index}
                    cname={`
                                btn normal-case ${
                                  currentPage.page === page.page
                                    ? 'bg-polar-400 hover:bg-polar-500'
                                    : 'bg-polar-300 hover:bg-polar-400'
                                }  transition duration-200 rounded-lg
                              `}
                    onClick={() => {
                      setCurrentPage(page);
                    }}
                  >
                    {index + 1}
                  </Button>
                );
              })}
              <Button
                cname="btn normal-case bg-polar-300 hover:bg-polar-400 transition duration-200"
                onClick={() => {
                  setCurrentPage(
                    (currentPage) =>
                      pages.find(
                        (page) => page.page === currentPage.page + 1
                      ) ?? currentPage
                  );
                }}
              >
                {'>'}
              </Button>
            </div>
          </>
        ) : (
          <p className="flex justify-center text-2xl font-bold text-white">
            No files uploaded yet.
          </p>
        )}
      </div>
    </>
  ) : null;
}
