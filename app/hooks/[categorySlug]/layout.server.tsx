import { getCategories, type Category } from '@/lib/getCategories';
import { Boundary } from '@/ui/Boundary.server';
import ClickCounter from '@/ui/ClickCounter.client';
import { GetServerSideProps } from 'next';
import SubCategoryNav from './SubCategoryNav.client';
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { categorySlug } = context.params!;

  return {
    props: {
      category: getCategories().find(
        (category) => category.slug === categorySlug,
      ),
    },
  };
};

export default function Layout({
  children,
  category,
}: {
  children: React.ReactNode;
  category: Category;
}) {
  return (
    <Boundary>
      <div className="space-y-9">
        <div>
          <div className="flex items-center justify-between">
            <SubCategoryNav category={category} />
            <div>
              <ClickCounter />
            </div>
          </div>
        </div>

        <div>{children}</div>
      </div>
    </Boundary>
  );
}