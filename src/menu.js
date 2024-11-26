import React, { useState } from 'react';
return (
   <div>
      <>
         <meta charSet="UTF-8" />
         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
         <title>Nuestros amigos peludos</title>
         <link
            href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
            rel="stylesheet"
         />
         <div className="bg-white">
            <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
               <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  ¡Adopta un perro!
               </h2>
               <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-x-8">
                  {/* Perros */}
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://img95.699pic.com/photo/32179/8074.jpg_wh300.jpg!/fh/300/quality/90"
                           alt="Perro 1"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Max
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Labrador Retriever</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://www.rover.com/blog/wp-content/uploads/2019/11/jack-russel-terrier-black-and-white.jpg"
                           alt="Perro 2"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Bella
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Bulldog Francés</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.a9AK-gCUSTad8S5ByavsDwHaEK?rs=1&pid=ImgDetMain"
                           alt="Perro 3"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Rocky
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Rottweiler</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://img.huffingtonpost.es/files/image_1200_720/uploads/2023/06/22/un-perro-de-raza-labrador.jpeg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Daisy
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/R.0b813e79fdfcdff403968f0302fc722b?rik=D3yL1hjWopAoqQ&pid=ImgRaw&r=0"
                           alt="Perro 5"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Charlie
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Cocker Spaniel</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.1BQWBXeY-tL8bKkoa3sl1gHaE7?rs=1&pid=ImgDetMain"
                           alt="Perro 6"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Cooper
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Pastor Alemán</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  {/* Gatos */}
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.wunrG8Zcw3iY9qyto1t5SAAAAA?w=474&h=316&rs=1&pid=ImgDetMain"
                           alt="Gato 1"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Luna
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Siamesa</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.uf7gQIJGHURGkOfPDfjrSAHaE8?rs=1&pid=ImgDetMain"
                           alt="Gato 2"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Simba
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Persa</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://www.anipedia.net/imagenes/que-comen-los-perros.jpg"
                           alt="Gato 3"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Cleo
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Bengalí</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.BQ9btFfyXeXjcVhODd9PwAHaEK?rs=1&pid=ImgDetMain"
                           alt="Gato 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Oreo
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Maine Coon</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://www.nationalgeographic.com.es/medio/2023/08/25/perro_adf93861_1412331876_230825124420_800x800.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Rocky
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://img.cutenesscdn.com/375/cme-data/getty/0eced096f6d44fe6b84bd0bef4cbc5fa.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Charlie
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.lk9fThZ_ekxDkSYN1SMeawHaFj?rs=1&pid=ImgDetMain"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Kit Kat
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/300000/300612.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Oreo
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://wikianimales.com/wp-content/uploads/2023/01/Gato-Ragdoll.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Milo
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.90_BDWk8wDOEohOLrTynEQHaFj?rs=1&pid=ImgDetMain"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Chispita
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://4.bp.blogspot.com/-6zdRURGfrXo/WO77aprD_OI/AAAAAAAAA5Q/QX-9ilmryMQW42wKuYbmLDniKD0wqKZSgCLcB/s400/contoh%2Bdescriptive%2Btext%2Btentang%2Bhewan%2B1.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Sonny
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/R.e2ba31d3cefcf269336c21ce7c40f7f3?rik=2GBXiKPX5Nn51g&riu=http%3a%2f%2fwww.of-golden-flame.de%2fextasy8woch-3.jpg&ehk=jRwHRxy9OuiLi6IXyg8z5ruAGFm0PaSm71eM%2bUCYsHg%3d&risl=&pid=ImgRaw&r=0"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Daisy
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://okdiario.com/img/2021/04/20/curiosidades-sobre-los-gatos-domesticos.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Rose
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.4b1FD4tCWaibltntKFopOAHaGv?w=800&h=729&rs=1&pid=ImgDetMain"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Xena
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://thumbs.dreamstime.com/b/cute-young-female-cat-tiger-style-stripes-cute-young-female-cat-tiger-style-stripes-blurred-natural-background-185642642.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Sissy
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://th.bing.com/th/id/OIP.Euj9Qt8sbGpdmppYEPI0VAHaGW?w=2940&h=2522&rs=1&pid=ImgDetMain"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Kitty
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://www.elmueble.com/medio/2023/04/14/gato-de-raza-ragdoll_5c5827ec_230414185205_1000x1493.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Harry
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
                  <div className="group relative">
                     <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                           src="https://phantom-expansion.unidadeditorial.es/0f7dd4a03ffd96c7eb907db6c843f908/resize/1200/f/jpg/assets/multimedia/imagenes/2023/01/16/16738813892252.jpg"
                           alt="Perro 4"
                           className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                     </div>
                     <div className="mt-4 flex justify-between">
                        <div>
                           <h3 className="text-sm text-gray-700">
                              <a href="#" className="text-sm font-medium text-gray-900">
                                 <span aria-hidden="true" className="absolute inset-0" />
                                 Pillo
                              </a>
                           </h3>
                           <p className="mt-1 text-sm text-gray-500">Beagle</p>
                        </div>
                        <p className="text-sm font-medium text-gray-900">¡Adoptame!</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>







   </div>
)
