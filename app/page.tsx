import { Container, Filters, ProductsGroupList } from "@/components/shared";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/TopBar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="pb-14 mt-10">
        <div className="flex gap-[80px]">
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                    items: [{ price: 550 }],
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                  {
                    id: 1,
                    name: "Чесночный цыпленок",
                    imageUrl:
                      "https://media.dodostatic.net/image/r:584x584/0198bf24170179679a7872f2ddf16d18.avif",
                    price: 550,
                    items: [{ price: 550 }],
                    description:
                      " Цыпленок, моцарелла, сыры чеддер и пармезан, сырный соус, томаты, соус альфредо, чеснок",
                  },
                ]}
                categoryId={2}
              />
              {/* <ProductsGroupList title="Комбо" items={[1, 2, 3, 4, 5]} /> */}
            </div>
            {/* 
            <div className="flex items-center gap-6 mt-12">
              <Pagination pageCount={3} />
              <span className="text-sm text-gray-400">5 из 65</span>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
}
