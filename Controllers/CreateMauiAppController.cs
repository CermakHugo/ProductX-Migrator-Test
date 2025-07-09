

namespace MauiApp.Controllers
{
    using Microsoft.AspNetCore.Mvc;
    using MauiApp.Services;

    [ApiController]
    [Route("api/[controller]")]
    public class MauiAppController : ControllerBase
    {
        private readonly IMauiProgram _mauiProgram;

        public MauiAppController(IMauiProgram mauiProgram)
        {
            _mauiProgram = mauiProgram;
        }

        [HttpPost]
        public IActionResult CreateMauiApplication(string parameter)
        {
            var mauiApp = _mauiProgram.CreateMauiApp(parameter);
            return Ok(mauiApp);
        }
    }
}