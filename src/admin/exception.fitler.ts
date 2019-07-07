import { ExceptionFilter, Catch, ForbiddenException, ArgumentsHost } from "@nestjs/common";

@Catch(ForbiddenException)
export class AuthExceptionFilter implements ExceptionFilter {
    catch(exception: ForbiddenException, host: ArgumentsHost) {
        console.log(exception);
        host.switchToHttp().getResponse().redirect('/admin/login');
    }
}
