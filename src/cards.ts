const card = `
        <div class="px-8 py-12 bg-white shadow-2xl max-w-md">
          <img class="h-10" src="/img/logo.svg" alt="Workcation" />
          <img
            class="mt-6 rounded-lg shadow-xl"
            src="/img/beach-work.jpg"
            alt="Woman workcationing on the beach"
          />
          <h1 class="mt-6 text-2xl font-bold text-gray-900">
            You can work from anywhere.
            <span class="text-indigo-500">Take advantage of it.</span>
          </h1>
          <p class="mt-2 text-gray-600">
            Workcation helps you find work-friendly rentals in beautiful
            locations so you can enjoy some nice weather even when you're not on
            vacation.
          </p>
          <div class="mt-4">
            <a
            class="inline-block px-5 py-3 rounded-lg transform transition bg-indigo-500 hover:bg-indigo-400 hover:-translate-y-0.5 focus:ring-indigo-500 focus:ring-opacity-50 focus:outline-none focus:ring focus:ring-offset-2 active:bg-indigo-600 uppercase tracking-wider font-semibold text-sm text-white shadow-lg sm:text-base"
             href="#"
            >
            Book your escape
            </a>
          </div>
        </div>`;

const cards = `
<div class="my-32">
    <h1 class="mt-16 mb-10 text-2xl w-full font-bold text-gray-900 sm:text-4xl lg:text-3xl xl:text-4xl text-center">
        You can work from anywhere.
    </h1>

    <div class="flex gap-8 sm:flex-row flex-col mx-auto w-full items-center justify-center">
        ${card}
        ${card}
        ${card}
    </div>
</div>
`;

export default cards;
