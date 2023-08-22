import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";

const CreateMembership = () => {
  const membershipFormSchema = yup.object().shape({
    membershipId: yup.string().required("Membership Id is required! "),
    membershipName: yup.string().required("Membership name is required!"),
    FirstName: yup.string().required("First name is required!"),
    lastName: yup.string().required("Last name is required!"),
    email: yup.string().email().required(),
    gender: yup.string().required("Gender is required!"),
    address: yup
      .array()
      .of(
        yup.object({
          city: yup.string().min(4).required(),
          streetName: yup.string().min(4).required("Street Name is required"),
          town: yup.string().min(4).required(),
        })
      )
      .required(),

    amountOfMembership: yup.string().required("Amount is required!"),
  });
  const formOptions = { resolver: yupResolver(membershipFormSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmitHandler = (event) => {
    console.log({ event });
    reset();
  };
  return (
    <>
      <div className="card mb-8">
        <div className="card-body table-responsive">
          <div className="col-md-12">
            <div className="card bg-light mb-2">
              <div className="card-header">
                <h2>
                  <b>
                    <i className="fa fa-handshake-o" aria-hidden="true"></i>
                    New Membership
                  </b>
                </h2>
              </div>
              <div class="card-body">
                <form
                  className="row g-3"
                  onSubmit={handleSubmit(onSubmitHandler)}
                >
                  <div className="col-md-3">
                    <label for="membershipId" className="form-label">
                      Membership Id
                    </label>
                    <input
                      type="text"
                      {...register("membershipId")}
                      className={`form-control mt-1 ${
                        errors.membershipId ? "is-invalid" : ""
                      }`}
                      id="membershipId"
                    />
                    <div className="invalid-feedback">
                      {errors.membershipId?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="membershipId" className="form-label">
                      Membership Name
                    </label>
                    <input
                      type="text"
                      {...register("membershipName")}
                      className={`form-control mt-1 ${
                        errors.membershipName ? "is-invalid" : ""
                      }`}
                      id="membershipName"
                    />
                    <div className="invalid-feedback">
                      {errors.membershipName?.message}
                    </div>
                  </div>
                  <div className="col-3">
                    <label for="FirstName" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register("FirstName")}
                      className={`form-control mt-1 ${
                        errors.FirstName ? "is-invalid" : ""
                      }`}
                      id="FirstName"
                      placeholder="Enter your first name"
                    />
                    <div className="invalid-feedback">
                      {errors.FirstName?.message}
                    </div>
                  </div>
                  <div className="col-3">
                    <label for="lastName" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName")}
                      className={`form-control mt-1 ${
                        errors.lastName ? "is-invalid" : ""
                      }`}
                      id="lastName"
                      placeholder="Enter your last name"
                    />
                    <div className="invalid-feedback">
                      {errors.lastName?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`form-control  
              mt-1 ${errors.email ? "is-invalid" : ""}`}
                      placeholder="Enter email"
                    />
                    <div className="invalid-feedback">
                      {errors.email?.message}
                    </div>
                  </div>
                  <div className="col-md-3">
                    <label for="inputState" className="form-label">
                      Gender
                    </label>
                    {/* Gender need to implement with select option  */}
                    <input
                      type="text"
                      {...register("gender")}
                      className={`form-control  
                            mt-1 ${errors.gender ? "is-invalid" : ""}`}
                      placeholder="Gender"
                    />
                  </div>
                  <div className="col-md-2">
                    <label for="inputZip" className="form-label">
                      Zip
                    </label>
                    <input type="text" className="form-control" id="inputZip" />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label className="form-check-label" for="gridCheck">
                        Check me out
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateMembership;
