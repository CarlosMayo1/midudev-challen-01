import { IconGhost2 } from '@tabler/icons-react';

const NotFoundBooks = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col items-center pt-5">
      <IconGhost2 size="28" />
      <p className="font-semibold text-center text-sm">{title}</p>
    </div>
  );
};

export default NotFoundBooks;
