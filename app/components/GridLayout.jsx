
export default function GridLayout() {
    return (
      <div className="container mx-auto p-6 bg-graph-paper">
        {/* Linha 1 */}
        <div className="flex flex-wrap mb-6">
          {/* Coluna 1: 1/3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-accent rounded shadow p-4">
              <p className="text-white font-semibold">Coluna 1 - 1/3 da largura</p>
              <p className="text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam non urna vel nisi
                placerat euismod.
              </p>
            </div>
          </div>
  
          {/* Coluna 2: 2/3 */}
          <div className="w-full md:w-2/3 p-4">
            <div className="bg-white rounded shadow p-4">
              <p className="text-gray-800 font-semibold">Coluna 2 - 2/3 da largura</p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis, nisi ac
                egestas euismod, orci metus scelerisque velit, at egestas purus est at risus.
              </p>
            </div>
          </div>
        </div>
  
        {/* Linha 2 */}
        <div className="flex flex-wrap">
          {/* Coluna 1: 2/3 */}
          <div className="w-full md:w-2/3 p-4">
            <div className="bg-white rounded shadow p-4">
              <p className="text-gray-800 font-semibold">Coluna 1 - 2/3 da largura</p>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, odio eget
                sollicitudin pellentesque, nisi nulla ullamcorper nisl, ut vulputate lectus velit in
                elit.
              </p>
            </div>
          </div>
  
          {/* Coluna 2: 1/3 */}
          <div className="w-full md:w-1/3 p-4">
            <div className="bg-primary rounded shadow p-4">
              <p className="text-white font-semibold">Coluna 2 - 1/3 da largura</p>
              <p className="text-white mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  